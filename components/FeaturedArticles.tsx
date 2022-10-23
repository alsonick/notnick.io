import { useEffect, useState } from "react";
import { Article } from "../types/articles";
import { ArticleCard } from "./ArticleCard";
import { ARTICLES } from "../lib/articles";
import { Heading } from "./Heading";
import { Button } from "./Button";

export const FeaturedArticles = () => {
  const [shuffledArticles, setShuffledArticles] = useState<Article[]>([]);

  const shuffleArticles = () => {
    let s = [];
    const shuffled = ARTICLES.map((value) => ({
      value,
      sort: Math.random(),
    }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    s.push(shuffled);
    console.log(s[0]);
    setShuffledArticles(s[0]);
  };

  useEffect(() => {
    shuffleArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col mb-12">
      <Heading>Featured Articles 📝</Heading>
      <div className="flex flex-col justify-between">
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
      <div className="ml-auto">
        <Button onClick={shuffleArticles}>Shuffle</Button>
      </div>
    </section>
  );
};
