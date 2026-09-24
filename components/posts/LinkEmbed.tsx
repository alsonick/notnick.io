"use client";

import { LinkPreview } from "../../types/link-preview";
import { useEffect, useState } from "react";

interface Props {
  /** The URL the post asked to embed. */
  url: string;
}

/**
 * The card behind a post's `[embed=true]` link, built from the target site's
 * own Open Graph tags the way a link pasted into Discord unfurls. A site that
 * publishes no tags, or can't be reached, falls back to the plain link.
 */
export const LinkEmbed = (props: Props) => {
  // The URL arrives escaped, since it rides along in an HTML attribute.
  const url = props.url.replace(/&quot;/g, '"').replace(/&amp;/g, "&");

  const [preview, setPreview] = useState<LinkPreview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A reader who leaves mid-look-up shouldn't set state on the way out.
    let active = true;

    setLoading(true);
    setPreview(null);

    fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
      .then((response) => {
        if (!response.ok) throw new Error("No preview for that url.");
        return response.json();
      })
      .then((data: LinkPreview) => {
        if (!active) return;
        setPreview(data);
        setLoading(false);
      })
      .catch(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [url]);

  if (loading) {
    return (
      <div
        className="not-prose my-6 animate-pulse rounded-lg border border-l-4 border-teal-100 border-l-primary
        bg-white p-4 dark:border-teal-900 dark:border-l-primary dark:bg-[#10161a]/50"
        aria-hidden="true"
      >
        <div className="h-3 w-24 rounded bg-slate-200 dark:bg-gray-800" />
        <div className="mt-3 h-4 w-2/3 rounded bg-slate-200 dark:bg-gray-800" />
        <div className="mt-2 h-3 w-full rounded bg-slate-200 dark:bg-gray-800" />
      </div>
    );
  }

  if (!preview) {
    return (
      <p>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </p>
    );
  }

  return (
    <a
      className="not-prose group my-6 block rounded-lg border border-l-4 border-teal-100 border-l-primary
      bg-white p-4 outline-none duration-300 hover:border-primary focus:ring-4 focus:ring-primary
      focus:ring-offset-2 dark:border-teal-900 dark:border-l-primary dark:bg-[#10161a]/50 dark:ring-offset-black"
      title={preview.title ?? url}
      href={preview.url}
      target="_blank"
      rel="noreferrer"
    >
      {preview.siteName ? (
        <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          {preview.favicon ? (
            <picture className="shrink-0">
              <img
                className="mr-2 h-4 w-4 shrink-0 rounded-sm"
                onError={(event) => {
                  // Plenty of sites name an icon they no longer serve.
                  event.currentTarget.style.display = "none";
                }}
                src={preview.favicon}
                loading="lazy"
                alt=""
              />
            </picture>
          ) : null}
          <span className="truncate">{preview.siteName}</span>
        </span>
      ) : null}
      {preview.title ? (
        <span className="mt-1 block font-bold text-primary group-hover:underline">
          {preview.title}
        </span>
      ) : null}
      {preview.description ? (
        <span className="mt-1 block text-sm text-gray-600 line-clamp-3 dark:text-gray-300">
          {preview.description}
        </span>
      ) : null}
      {preview.image ? (
        <picture>
          <img
            className="mt-3 max-h-80 w-full rounded object-cover"
            src={preview.image}
            loading="lazy"
            alt=""
          />
        </picture>
      ) : null}
    </a>
  );
};
