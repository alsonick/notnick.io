import { useEffect, useState } from "react";
import { Article } from "../types/article";
import { ArticleCard } from "./ArticleCard";
import { ARTICLES } from "../lib/articles";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Link } from "./Link";

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
      <Link href="/articles">View all articles &#8594;</Link>
      <div className="ml-auto">
        <Button onClick={shuffleArticles}>Shuffle</Button>
      </div>
    </section>
  );
};
