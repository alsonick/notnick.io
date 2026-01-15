import { useEffect, useState } from "react";

interface TweetProps {
  id: string;
  url: string;
}

export const Tweet = ({ id, url }: TweetProps) => {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.html) {
          setHtml(data.html);
        }
        setLoading(false);

        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center my-6 text-gray-500">
        Loading tweet...
      </div>
    );
  }

  if (!html) {
    return (
      <div className="flex justify-center my-6 text-gray-500">
        Tweet not found
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center my-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
