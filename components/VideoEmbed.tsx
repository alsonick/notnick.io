interface Props {
  id: string;
  start?: string;
}

export const VideoEmbed = (props: Props) => {
  const params = new URLSearchParams({ rel: "0" });
  if (props.start) params.set("start", props.start);

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg border border-teal-100 dark:border-teal-900">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${props.id}?${params.toString()}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="h-full w-full"
        referrerPolicy="strict-origin-when-cross-origin"
        title="YouTube video player"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};
