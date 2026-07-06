import { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import {
  QuizQuestion,
  StoredQuizAnswer,
  StoredQuizAnswers,
} from "../types/quiz";
import { Label } from "./Label";

const STORAGE_KEY = "quiz-answers";

const SECONDARY_BUTTON = `rounded-lg border border-teal-100 dark:border-teal-900 px-4 py-2
  text-sm font-bold text-gray-600 dark:text-gray-300 outline-none duration-300
  hover:border-primary hover:text-black dark:hover:text-white focus:ring-4 ring-primary
  focus:ring-offset-2 dark:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed
  disabled:hover:border-teal-100 dark:disabled:hover:border-teal-900`;

const readAnswers = (): StoredQuizAnswers => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredQuizAnswers) : {};
  } catch {
    return {};
  }
};

const saveAnswer = (storageId: string, answer: StoredQuizAnswer) => {
  try {
    const answers = readAnswers();
    answers[storageId] = answer;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // localStorage unavailable (private mode / quota) — the quiz still
    // works, the answer just won't survive a reload.
  }
};

const removeAnswer = (storageId: string) => {
  try {
    const answers = readAnswers();
    delete answers[storageId];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // localStorage unavailable — nothing to remove.
  }
};

interface Props {
  /** Key for this quiz in the stored answers record. */
  storageId: string;
  quiz: QuizQuestion;
}

export const Quiz = (props: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Restore a previously submitted answer. Only if it was for the current
  // version of the question, so editing a quiz lets readers answer again.
  useEffect(() => {
    const stored = readAnswers()[props.storageId];
    if (stored && stored.question === props.quiz.question) {
      setSelected(stored.answerIndex);
      setSubmitted(true);
    }
  }, [props.storageId, props.quiz.question]);

  const correct = selected === props.quiz.correctIndex;

  const handleSubmit = () => {
    if (submitted || selected === null) return;
    setSubmitted(true);
    saveAnswer(props.storageId, {
      topic: props.quiz.topic,
      question: props.quiz.question,
      answer: props.quiz.options[selected],
      answerIndex: selected,
      correct: selected === props.quiz.correctIndex,
      answeredAt: new Date().toISOString(),
    });
  };

  const handleReset = () => {
    removeAnswer(props.storageId);
    setSelected(null);
    setSubmitted(false);
  };

  const optionClasses = (index: number) => {
    const base = `flex items-center w-full text-left rounded-lg border p-3 outline-none
      duration-300 focus:ring-4 ring-primary focus:ring-offset-2 dark:ring-offset-black`;

    if (!submitted) {
      return `${base} cursor-pointer ${
        selected === index
          ? "border-primary bg-primary/10 text-gray-900 dark:text-white"
          : "border-teal-100 dark:border-teal-900 text-gray-600 dark:text-gray-300 hover:border-primary"
      }`;
    }

    if (index === props.quiz.correctIndex) {
      return `${base} border-green-500 bg-green-500/10 text-gray-900 dark:text-white`;
    }
    if (index === selected) {
      return `${base} border-red-500 bg-red-500/10 text-gray-900 dark:text-white`;
    }
    return `${base} border-teal-100 dark:border-teal-900 text-gray-600 dark:text-gray-300 opacity-60`;
  };

  return (
    <div className="not-prose my-8 rounded-lg border border-teal-100 dark:border-teal-900 p-5">
      <Label text="Quiz" />
      <p className="font-bold mt-2 text-gray-900 dark:text-white">
        {props.quiz.question}
      </p>
      <div
        className="mt-4 space-y-2"
        role="radiogroup"
        aria-label={props.quiz.question}
      >
        {props.quiz.options.map((option, index) => (
          <button
            key={option}
            role="radio"
            aria-checked={selected === index}
            disabled={submitted}
            onClick={() => setSelected(index)}
            className={optionClasses(index)}
          >
            <span
              className={`mr-3 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                selected === index
                  ? "border-primary"
                  : "border-gray-400 dark:border-gray-500"
              }`}
            >
              {selected === index && (
                <span className="h-2 w-2 rounded-full bg-primary" />
              )}
            </span>
            {option}
            {submitted && index === props.quiz.correctIndex && (
              <FiCheck className="ml-auto text-lg flex-shrink-0 text-green-500" />
            )}
            {submitted &&
              index === selected &&
              index !== props.quiz.correctIndex && (
                <FiX className="ml-auto text-lg flex-shrink-0 text-red-500" />
              )}
          </button>
        ))}
      </div>
      {submitted ? (
        <>
          <div
            role="status"
            className={`mt-4 flex items-center rounded-lg p-3 text-sm font-bold ${
              correct
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-red-500/10 text-red-600 dark:text-red-400"
            }`}
          >
            {correct ? (
              <>
                <FiCheck className="mr-2 text-lg flex-shrink-0" />
                Correct! Nice work. 🎉
              </>
            ) : (
              <>
                <FiX className="mr-2 text-lg flex-shrink-0" />
                <span>
                  Not quite — the correct answer is &ldquo;
                  {props.quiz.options[props.quiz.correctIndex]}&rdquo;.
                </span>
              </>
            )}
          </div>
          <button
            onClick={handleReset}
            title="Forget this answer and try the question again."
            className={`${SECONDARY_BUTTON} mt-3`}
          >
            Reset
          </button>
        </>
      ) : (
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white
              outline-none duration-300 focus:ring-4 ring-primary focus:ring-offset-2
              dark:ring-offset-black hover:scale-105 disabled:opacity-50
              disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Submit
          </button>
          <button
            onClick={() => setSelected(null)}
            disabled={selected === null}
            title="Clear your selection."
            className={SECONDARY_BUTTON}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
