import { FiDownload } from "react-icons/fi";

interface Props {
  /** Public path to the `.pkt` file. */
  href: string;
  /** File name, shown under the label and used as the download name. */
  file: string;
}

export const DownloadLab = (props: Props) => {
  // The file name arrives escaped, since it rides along in an HTML attribute.
  const file = props.file.replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  const name = file.replace(/\.pkt$/i, "");

  return (
    <a
      className="not-prose group flex items-center my-6 border border-teal-100 dark:border-teal-900 rounded-lg p-4
      bg-white dark:bg-[#10161a]/50 hover:border-primary focus:ring-4 focus:ring-primary focus:ring-offset-2
      dark:ring-offset-black outline-none transition-colors duration-200"
      title={`Download the Cisco Packet Tracer lab "${name}"`}
      download={file}
      href={props.href}
    >
      <picture>
        <img
          className="w-8 mr-3 shrink-0"
          src="/assets/ciscopackettracer.png"
          title="Cisco Packet Tracer icon"
          alt="Cisco Packet Tracer icon"
        />
      </picture>
      <span className="flex flex-col min-w-0">
        <span className="font-bold text-base text-primary group-hover:underline">
          Download Cisco Packet Tracer Lab
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300 truncate">
          {name}
        </span>
      </span>
      <FiDownload className="ml-auto pl-3 text-3xl shrink-0 text-gray-600 dark:text-gray-300 group-hover:text-primary duration-300" />
    </a>
  );
};
