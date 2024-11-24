// import type { NextApiRequest, NextApiResponse } from "next";

// const rateLimitStore: { [key: string]: number } = {};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const body = req.body;

//   const CHARACTER_LIMIT = 500;
//   const RATE_LIMIT_TIME = 30 * 60 * 1000;

//   if (!body) {
//     return res
//       .status(400)
//       .send({ success: false, error: "Please include the body." });
//   }

//   interface Body {
//     email?: string | undefined;
//     message?: string | undefined;
//   }

//   const { email, message } = body as Body;

//   const ipAddress =
//     (Array.isArray(req.headers["x-forwarded-for"])
//       ? req.headers["x-forwarded-for"][0]
//       : req.headers["x-forwarded-for"]?.split(",")[0]) ||
//     req.socket.remoteAddress;

//   const isLocalhost = ipAddress === "::1" || ipAddress === "127.0.0.1";

//   if (isLocalhost) {
//     console.log("Request from local development environment.");
//   }

//   if (
//     !email
//       ?.toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       )
//   ) {
//     return res
//       .status(400)
//       .send({ success: false, error: "Please include a valid email." });
//   }

//   if (!email || !message) {
//     return res
//       .status(400)
//       .send({ success: false, error: "Please include all the fields." });
//   }

//   if (message.length > CHARACTER_LIMIT) {
//     return res.status(400).send({
//       success: false,
//       error: `You can only have ${CHARACTER_LIMIT} characters.`,
//     });
//   }

//   const lastRequestTime = rateLimitStore[email];

//   if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_TIME) {
//     const timeLeft = Math.ceil(
//       (RATE_LIMIT_TIME - (Date.now() - lastRequestTime)) / 1000 / 60
//     ); // in minutes
//     return res.status(429).send({
//       success: false,
//       error: `RATE LIMIT: Please wait ${timeLeft} more minute(s) before sending another request.`,
//     });
//   }

//   rateLimitStore[email] = Date.now();

//   const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
//     method: "POST",
//     body: JSON.stringify({
//       embeds: [
//         {
//           author: {
//             name: `New message | ${email}`,
//           },
//           description: message,
//           fields: [
//             {
//               name: "IP Address",
//               value: ipAddress as string,
//             },
//           ],
//         },
//       ],
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.status >= 400) {
//     return res.send({ success: false, error: "Something went wrong." });
//   }

//   return res.status(200).send({ success: true });
// }
