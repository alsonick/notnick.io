import { FiDownload, FiFileText } from "react-icons/fi";

interface Props {
  /** Endpoint that slices the markdown out of the post and serves it. */
  href: string;
  /** Section heading or post title, shown as the file name under the label. */
  topic: string;
  /** False when the download is the whole post rather than one section. */
  isSection?: boolean;
}

export const DownloadSection = (props: Props) => {
  // The topic arrives escaped, since it rides along in an HTML attribute.
  const topic = props.topic.replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  const what = props.isSection ? "section" : "post";

  return (
    <a
      className="not-prose group flex items-center my-6 border border-teal-100 dark:border-teal-900 rounded-lg p-4
      bg-white dark:bg-[#10161a]/50 hover:border-primary focus:ring-4 focus:ring-primary focus:ring-offset-2
      dark:ring-offset-black outline-none duration-300"
      title={`Download "${topic}" as a Markdown file`}
      download={`${topic}.md`}
      href={props.href}
    >
      <span
        className="w-8 h-8 mr-3 shrink-0 flex items-center justify-center rounded border
        border-teal-100 dark:border-teal-900 text-gray-600 dark:text-gray-300 group-hover:text-primary duration-300"
      >
        <FiFileText className="text-lg" />
      </span>
      <span className="flex flex-col min-w-0">
        <span className="font-bold text-base text-primary group-hover:underline">
          Download this {what}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300 truncate">
          {topic}.md
        </span>
      </span>
      <FiDownload className="ml-auto pl-3 text-3xl shrink-0 text-gray-600 dark:text-gray-300 group-hover:text-primary duration-300" />
    </a>
  );
};
