import type { NextApiRequest, NextApiResponse } from "next";
import {
  DELETE_AFTER_REVIEW_OPTIONS,
  AGENTIC_TOOLS_OPTIONS,
  GRADE_OPTIONS,
  STACK_OPTIONS,
} from "../../../lib/apply-options";
import { THEME } from "../../../lib/constants";

const rateLimitStore: { [key: string]: number } = {};

const trim = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isValidUrl = (value: string, host?: string) => {
  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return false;
    }

    if (host && url.hostname !== host && !url.hostname.endsWith(`.${host}`)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ success: false, error: "Method not allowed." });
    }

    const body = req.body;

    const CHARACTER_LIMIT = 500;
    const RATE_LIMIT_TIME = 30 * 60 * 1000;

    if (!body || typeof body !== "object") {
      return res
        .status(400)
        .json({ success: false, error: "Please include the body." });
    }

    const deleteAfterReview = trim(body.deleteAfterReview);
    const agenticTools = trim(body.agenticTools);
    const linkedin = trim(body.linkedin);
    const project = trim(body.project);
    const discord = trim(body.discord);
    const stack = trim(body.stack);
    const github = trim(body.github);
    const degree = trim(body.degree);
    const email = trim(body.email);
    const grade = trim(body.grade);
    const about = trim(body.about);
    const name = trim(body.name);

    if (
      !name ||
      !email ||
      !degree ||
      !grade ||
      !github ||
      !linkedin ||
      !stack ||
      !agenticTools ||
      !discord ||
      !deleteAfterReview
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Please include all the fields." });
    }

    if (!email.toLowerCase().match(/^[^\s@]+@kent\.ac\.uk$/)) {
      return res.status(400).json({
        success: false,
        error: "Please use your Kent email (@kent.ac.uk).",
      });
    }

    if (
      !GRADE_OPTIONS.includes(grade) ||
      !STACK_OPTIONS.includes(stack) ||
      !AGENTIC_TOOLS_OPTIONS.includes(agenticTools) ||
      !DELETE_AFTER_REVIEW_OPTIONS.includes(deleteAfterReview)
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Please select valid options." });
    }

    if (!isValidUrl(github, "github.com")) {
      return res.status(400).json({
        success: false,
        error: "Please include a valid GitHub profile link.",
      });
    }

    if (!isValidUrl(linkedin, "linkedin.com")) {
      return res.status(400).json({
        success: false,
        error: "Please include a valid LinkedIn profile link.",
      });
    }

    if (project && !isValidUrl(project)) {
      return res.status(400).json({
        success: false,
        error: "Please include a valid project link.",
      });
    }

    const fields = [
      name,
      email,
      degree,
      github,
      linkedin,
      project,
      discord,
      about,
    ];

    if (fields.some((field) => field.length > CHARACTER_LIMIT)) {
      return res.status(400).json({
        success: false,
        error: `Each field can only have ${CHARACTER_LIMIT} characters.`,
      });
    }

    const lastRequestTime = rateLimitStore[email];

    if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_TIME) {
      const timeLeft = Math.ceil(
        (RATE_LIMIT_TIME - (Date.now() - lastRequestTime)) / 1000 / 60,
      );
      return res.status(429).json({
        success: false,
        error: `RATE LIMIT: Please wait ${timeLeft} more minute(s) before applying again.`,
      });
    }

    const webhookUrl =
      process.env.DISCORD_APPLY_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("DISCORD_APPLY_WEBHOOK_URL is not set.");
      return res.status(500).json({
        success: false,
        error: "Server misconfigured: DISCORD_APPLY_WEBHOOK_URL is not set.",
      });
    }

    rateLimitStore[email] = Date.now();

    let discordResponse: Response;

    try {
      discordResponse = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          embeds: [
            {
              author: {
                name: `New application | ${name}`.slice(0, 256),
              },
              color: parseInt(THEME.replace("#", ""), 16),
              fields: [
                { name: "Name", value: name, inline: true },
                { name: "Kent Email", value: email, inline: true },
                { name: "Discord", value: discord, inline: true },
                { name: "Degree", value: degree, inline: true },
                { name: "Average Grade", value: grade, inline: true },
                { name: "Stack Preference", value: stack, inline: true },
                { name: "GitHub", value: github, inline: true },
                { name: "LinkedIn", value: linkedin, inline: true },
                ...(project
                  ? [
                      {
                        name: "Proudest Project",
                        value: project,
                        inline: false,
                      },
                    ]
                  : []),
                ...(about
                  ? [
                      {
                        name: "Why They're Proud of It",
                        value: about,
                        inline: false,
                      },
                    ]
                  : []),
                {
                  name: "Agentic Coding Tools",
                  value: agenticTools,
                  inline: false,
                },
                {
                  name: "Delete After Review",
                  value: deleteAfterReview,
                  inline: false,
                },
              ],
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Discord webhook threw:", err);
      return res.status(502).json({
        success: false,
        error: `Failed to reach Discord: ${
          err instanceof Error ? err.message : String(err)
        }`,
      });
    }

    if (discordResponse.status >= 400) {
      const detail = await discordResponse.text().catch(() => "");
      console.error("Discord webhook error:", discordResponse.status, detail);
      return res.status(502).json({
        success: false,
        error: `Discord returned ${discordResponse.status}.`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("/api/group/apply failed:", err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Internal server error.",
    });
  }
}
