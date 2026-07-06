export interface QuizQuestion {
  /** Slug of the section heading this quiz belongs to (same as the heading's anchor id). */
  id: string;
  /** The section heading / topic. */
  topic: string;
  question: string;
  /** Exactly four answer options. */
  options: [string, string, string, string];
  /** Index (0-3) of the correct option. */
  correctIndex: 0 | 1 | 2 | 3;
}

/**
 * One submitted answer. All answers live in a single localStorage entry:
 *
 *   key:   "quiz-answers"
 *   value: JSON of Record<string, StoredQuizAnswer>, keyed by
 *          `${postType}/${postSlug}/${sectionId}` (e.g. "note/networking/what-is-a-computer-network")
 */
export interface StoredQuizAnswer {
  topic: string;
  question: string;
  /** Text of the option the user picked. */
  answer: string;
  answerIndex: number;
  correct: boolean;
  /** ISO timestamp of when the answer was submitted. */
  answeredAt: string;
}

export type StoredQuizAnswers = Record<string, StoredQuizAnswer>;
