import { FiArrowRight } from "react-icons/fi";
import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { ARTICLES } from "../lib/articles";
import { Article } from "../types/article";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { LinkT } from "./Link";

export const FeaturedArticles = () => {
  const [shuffledArticles, setShuffledArticles] = useState<Article[]>([]);

  const shuffleArticles = () => {
    let s = [];
    const shuffled = ARTICLES.slice(0, 3)
      .map((value) => ({
        value,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    s.push(shuffled);
    setShuffledArticles(s[0]);
  };

  useEffect(() => {
    shuffleArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex justify-between flex-col mb-12">
      <Heading>Featured Articles 📝</Heading>
      <div className="flex flex-col lg:flex-row">
        {shuffledArticles.map((article) => (
          <ArticleCard
            key={article.id}
            type={article.type}
            title={article.title}
            link={article.link}
            authors={article.authors}
          />
        ))}
      </div>
      <div className="p-2">
        <LinkT href="/articles" title="View all articles">
          View all articles <FiArrowRight className="text-lg ml-1" />
        </LinkT>
      </div>
      <div className="ml-auto">
        <Button onClick={shuffleArticles}>Shuffle</Button>
      </div>
    </section>
  );
};
