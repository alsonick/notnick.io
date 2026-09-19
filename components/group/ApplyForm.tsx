import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "../ui/dropdown-menu";
import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { StatusMessage } from "../ui/StatusMessage";
import { ICON } from "../../lib/tailwindcss/icon";
import { TextArea } from "../ui/TextArea";
import { Loading } from "../ui/Loading";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Text } from "../ui/Text";
import { Note } from "../ui/Note";
import { Form } from "../ui/Form";

import {
  DELETE_AFTER_REVIEW_OPTIONS,
  AGENTIC_TOOLS_OPTIONS,
  GRADE_OPTIONS,
  STACK_OPTIONS,
} from "../../lib/data/apply-options";

export const ApplyForm = () => {
  const [deleteAfterReview, setDeleteAfterReview] = useState("");
  const [agenticTools, setAgenticTools] = useState("");
  const [stack, setStack] = useState("");
  const [degree, setDegree] = useState("");
  const [grade, setGrade] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [success, setSuccess] = useState("");
  const [project, setProject] = useState("");
  const [discord, setDiscord] = useState("");
  const [github, setGithub] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const sendApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!email.toLowerCase().match(/^[^\s@]+@kent\.ac\.uk$/)) {
      return setError("Please use your Kent email (@kent.ac.uk).");
    }

    if (!grade) {
      return setError("Please select the grade you're averaging.");
    }

    if (!stack) {
      return setError(
        "Please select if you prefer frontend, backend or full-stack.",
      );
    }

    if (!agenticTools) {
      return setError("Please select an option for agentic coding tools.");
    }

    if (!deleteAfterReview) {
      return setError(
        "Please select if you want your application deleted after review.",
      );
    }

    setLoading(true);

    try {
      const res = await fetch("/api/group/apply", {
        method: "POST",
        body: JSON.stringify({
          deleteAfterReview,
          agenticTools,
          linkedin,
          stack,
          project,
          discord,
          github,
          degree,
          email,
          grade,
          about,
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response: { success: boolean; error?: string | undefined } =
        await res.json();

      if (response.success) {
        setSuccess("Thanks! I've received your application.");
        setDeleteAfterReview("");
        setAgenticTools("");
        setLinkedin("");
        setDegree("");
        setStack("");
        setProject("");
        setDiscord("");
        setGithub("");
        setEmail("");
        setGrade("");
        setAbout("");
        setName("");
      } else {
        setError(response.error ?? "Something went wrong.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={sendApplication} action="POST">
      <div className="flex items-center justify-between">
        <Heading style={{ fontSize: "1.2rem", marginBottom: 0 }}>
          Application Form
        </Heading>
      </div>
      <Text>Apply to join my group for the third year group project.</Text>
      <div className="flex flex-col my-2 justify-center w-full">
        <div className="mb-1">
          <Label text="full name" htmlFor="name" />
        </div>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nicholas Njoki"
          style={{ width: "100%" }}
          required={true}
          value={name}
          name="name"
          type="text"
          id="name"
        />
        <div className="mb-1 mt-2">
          <Label text="university email" htmlFor="email" />
        </div>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc123@kent.ac.uk"
          style={{ width: "100%" }}
          required={true}
          value={email}
          name="email"
          type="email"
          id="email"
        />
        <div className="mb-1 mt-2">
          <Label text="degree" htmlFor="degree" />
        </div>
        <Input
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Software Engineering"
          style={{ width: "100%" }}
          required={true}
          value={degree}
          name="degree"
          type="text"
          id="degree"
        />
        <div className="mb-1 mt-2">
          <Label text="averaging grade" id="grade-label" />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center justify-between w-full p-2 rounded-lg px-4 text-base font-medium
              duration-300 bg-gray-100 focus:ring-offset-2 dark:ring-offset-black dark:bg-gray-800
              focus:ring-4 ring-primary outline-none ${
                grade
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              type="button"
              id="grade"
              aria-labelledby="grade-label grade"
            >
              {grade ? grade : "Select an option"}
              <FiChevronDown className="ml-2 text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
            align="start"
          >
            {GRADE_OPTIONS.map((option) => (
              <DropdownMenuItem
                className="w-full cursor-pointer text-black dark:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:text-black dark:focus:text-black duration-300"
                onSelect={() => setGrade(option)}
                key={option}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mt-2">
          <Note>
            Whatever grade you&apos;re averaging will not affect your
            application, I&apos;m just curious. I don&apos;t care about your
            grades, I only care about your drive to build and ship cool shit.
          </Note>
        </div>
        <div className="mb-1 mt-2">
          <Label text="linkedin profile" htmlFor="linkedin" />
        </div>
        <Input
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="https://www.linkedin.com/in/username"
          style={{ width: "100%" }}
          required={true}
          value={linkedin}
          name="linkedin"
          type="url"
          id="linkedin"
        />
        <div className="mb-1 mt-2">
          <Label text="github profile" htmlFor="github" />
        </div>
        <Input
          onChange={(e) => setGithub(e.target.value)}
          placeholder="https://github.com/username"
          style={{ width: "100%" }}
          required={true}
          value={github}
          name="github"
          type="url"
          id="github"
        />
        <div className="mb-1 mt-2">
          <Label
            text="a project you're most proud of (optional)"
            htmlFor="project"
          />
        </div>
        <Input
          onChange={(e) => setProject(e.target.value)}
          placeholder="https://github.com/username/project"
          style={{ width: "100%" }}
          value={project}
          name="project"
          type="url"
          id="project"
        />
        <div className="mb-1 mt-2">
          <Label
            text="why are you proud of it? (optional)"
            htmlFor="project-reason"
          />
        </div>
        <TextArea
          onChange={(e) => setAbout(e.target.value)}
          id="project-reason"
          placeholder="A quick note on what it does and the part you're most proud of."
          value={about}
          rows={4}
        />
        <div className="mb-1 mt-2">
          <Label
            text="do you prefer frontend, backend or full-stack?"
            id="stack-label"
          />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center justify-between w-full p-2 rounded-lg px-4 text-base font-medium
              duration-300 bg-gray-100 focus:ring-offset-2 dark:ring-offset-black dark:bg-gray-800
              focus:ring-4 ring-primary outline-none ${
                stack
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              type="button"
              id="stack"
              aria-labelledby="stack-label stack"
            >
              {stack ? stack : "Select an option"}
              <FiChevronDown className="ml-2 text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
            align="start"
          >
            {STACK_OPTIONS.map((option) => (
              <DropdownMenuItem
                className="w-full cursor-pointer text-black dark:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:text-black dark:focus:text-black duration-300"
                onSelect={() => setStack(option)}
                key={option}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mb-1 mt-2">
          <Label
            text="are you familiar with agentic coding tools? (claude code, codex)"
            id="agentic-tools-label"
          />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center justify-between w-full p-2 rounded-lg px-4 text-base font-medium
              duration-300 bg-gray-100 focus:ring-offset-2 dark:ring-offset-black dark:bg-gray-800
              focus:ring-4 ring-primary outline-none ${
                agenticTools
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              type="button"
              id="agentic-tools"
              aria-labelledby="agentic-tools-label agentic-tools"
            >
              {agenticTools ? agenticTools : "Select an option"}
              <FiChevronDown className="ml-2 text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
            align="start"
          >
            {AGENTIC_TOOLS_OPTIONS.map((option) => (
              <DropdownMenuItem
                className="w-full cursor-pointer text-black dark:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:text-black dark:focus:text-black duration-300"
                onSelect={() => setAgenticTools(option)}
                key={option}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mb-1 mt-2">
          <Label text="discord username" htmlFor="discord" />
        </div>
        <Input
          onChange={(e) => setDiscord(e.target.value)}
          placeholder="heynickn"
          style={{ width: "100%" }}
          required={true}
          value={discord}
          name="discord"
          type="text"
          id="discord"
        />
        <div className="mb-1 mt-2">
          <Label
            text="delete application after review?"
            id="delete-after-review-label"
          />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center justify-between w-full p-2 rounded-lg px-4 text-base font-medium
              duration-300 bg-gray-100 focus:ring-offset-2 dark:ring-offset-black dark:bg-gray-800
              focus:ring-4 ring-primary outline-none ${
                deleteAfterReview
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              type="button"
              id="delete-after-review"
              aria-labelledby="delete-after-review-label delete-after-review"
            >
              {deleteAfterReview ? deleteAfterReview : "Select an option"}
              <FiChevronDown className="ml-2 text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
            align="start"
          >
            {DELETE_AFTER_REVIEW_OPTIONS.map((option) => (
              <DropdownMenuItem
                className="w-full cursor-pointer text-black dark:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:text-black dark:focus:text-black duration-300"
                onSelect={() => setDeleteAfterReview(option)}
                key={option}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full flex items-center justify-between mt-2">
        <Loading loading={loading} text="Sending..." />
        {error && !loading ? (
          <div className="flex items-center">
            <HiExclamationCircle className="mr-1 mt-[1px] text-red-500" />
            <StatusMessage message={error} type="error" />
          </div>
        ) : null}
        {success && !loading ? (
          <div className="flex items-center">
            <HiBadgeCheck className="mr-1 mt-[1px] text-green-500" />
            <StatusMessage message={success} type="success" />
          </div>
        ) : null}
        <div className="ml-auto pl-1">
          <Button title="Apply" disabled={loading}>
            Apply <FiSend className={ICON} />
          </Button>
        </div>
      </div>
    </Form>
  );
};
