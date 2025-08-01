import { ICON } from "../lib/tailwindcss/icon";
import { FiArrowRight } from "react-icons/fi";
import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { ARTICLES } from "../lib/articles";
import { Article } from "../types/article";
import { FiRepeat } from "react-icons/fi";
import { Section } from "./Section";
import { Heading } from "./Heading";
import { page } from "../lib/page";
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
    <Section>
      <Heading>Featured Articles 📝</Heading>
      <div className="flex flex-col lg:flex-row">
        {shuffledArticles.map((article) => (
          <ArticleCard
            authors={article.authors}
            title={article.title}
            tags={article.tags}
            link={article.link}
            key={article.id}
          />
        ))}
      </div>
      <div className="pl-0 lg:pl-2 sm:mt-0 mt-2">
        <LinkT href={page.articles.link} title="View all articles">
          View all articles <FiArrowRight className="text-lg ml-1" />
        </LinkT>
      </div>
      <div className="ml-auto">
        <Button onClick={shuffleArticles}>
          Shuffle <FiRepeat className={ICON} />
        </Button>
      </div>
    </Section>
  );
};
