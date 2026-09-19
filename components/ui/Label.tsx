interface Props {
  text: string;
  /** Id of the form field this labels. Without one it renders as a plain caption. */
  htmlFor?: string;
  /** Lets a control that isn't a native field reference it via aria-labelledby. */
  id?: string;
}

// Uppercased with CSS rather than toUpperCase() so screen readers read the
// words as written instead of spelling out short all-caps ones.
const CLASS_NAME =
  "font-bold text-sm uppercase text-gray-700 dark:text-gray-300";

export const Label = (props: Props) => {
  if (props.htmlFor) {
    return (
      <label id={props.id} htmlFor={props.htmlFor} className={CLASS_NAME}>
        {props.text}
      </label>
    );
  }

  return (
    <span id={props.id} className={CLASS_NAME}>
      {props.text}
    </span>
  );
};
