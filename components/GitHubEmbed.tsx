"use client";

import { useEffect, useState } from "react";

interface Props {
  url: string;
}

interface IssueData {
  pull_request?: { merged_at?: string };
  user?: { login: string };
  created_at: string;
  html_url: string;
  comments: number;
  number: number;
  title: string;
  state: string;
}

export const GitHubEmbed = ({ url }: Props) => {
  const [data, setData] = useState<IssueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiUrl = url.replace(
      /https?:\/\/github.com\/(.+?)\/(.+?)\/(issues|pull)\/(\d+)/,
      "https://api.github.com/repos/$1/$2/issues/$4"
    );

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub data");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center my-6 text-gray-500">
        Loading GitHub issue...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center my-6 text-gray-500">
        Could not load GitHub issue
      </div>
    );
  }

  const isMerged = Boolean(data.pull_request?.merged_at);
  const stateLabel = isMerged ? "merged" : data.state;

  return (
    <a
      href={data.html_url}
      target="_blank"
      rel="noreferrer"
      className="block my-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-[#10161a]/50 hover:border-primary transition-colors duration-200"
    >
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        #{data.number} • {stateLabel}
      </div>
      <div className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
        {data.title}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-4 flex-wrap">
        <span>Author: {data.user?.login}</span>
        <span>Comments: {data.comments}</span>
        <span>Created: {new Date(data.created_at).toLocaleDateString()}</span>
      </div>
    </a>
  );
};
