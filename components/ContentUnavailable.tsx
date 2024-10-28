import { GoBack } from "./GoBack";

interface Props {
  backButtonLocation?: string;
  showBackButton?: boolean;
  message?: string;
}

export const ContentUnavailable = (props: Props) => {
  return (
    <div className="text-center items-center flex flex-col w-fit">
      <h2 className="text-xl font-semibold opacity-30 dark:text-white">
        Content Unavailable
      </h2>
      <p className="text-gray-600 dark:text-gray-300 opacity-80 w-2/3">
        {props.message
          ? props.message
          : "The page is not supported on small mobile devices."}
      </p>
      {props.showBackButton && (
        <div className="mt-2">
          <GoBack location={props.backButtonLocation} />
        </div>
      )}
    </div>
  );
};
