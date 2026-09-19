import { GoBack } from "../layout/GoBack";

interface Props {
  backButtonLocation?: string;
  showBackButton?: boolean;
  message?: string;
  /** h1 when this message stands in for the whole page. */
  headingLevel?: "h1" | "h2";
}

export const ContentUnavailable = (props: Props) => {
  const HeadingTag = props.headingLevel ?? "h2";

  return (
    <div className="text-center items-center flex flex-col w-fit">
      <HeadingTag className="text-xl font-semibold text-gray-500 dark:text-gray-400">
        Content Unavailable
      </HeadingTag>
      <p className="text-gray-600 dark:text-gray-300 opacity-80 w-2/3">
        {props.message
          ? props.message
          : "The page is not supported on smaller mobile devices."}
      </p>
      {props.showBackButton && (
        <div className="mt-2">
          <GoBack location={props.backButtonLocation} />
        </div>
      )}
    </div>
  );
};
