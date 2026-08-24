interface Props {
  id?: string;
  list?: string;
  start?: string;
}

export const VideoEmbed = (props: Props) => {
  const params = new URLSearchParams({ rel: "0" });
  if (props.list) params.set("list", props.list);
  if (props.start) params.set("start", props.start);

  // A playlist URL names no video of its own, so it plays from its first
  // entry, which is what YouTube's `videoseries` path is for.
  const path = props.id ?? "videoseries";

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg border border-teal-100 dark:border-teal-900">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${path}?${params.toString()}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="h-full w-full"
        referrerPolicy="strict-origin-when-cross-origin"
        title={props.id ? "YouTube video player" : "YouTube playlist player"}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};
