import { truncateText } from "../../lib/utils/truncate-text";
import { FiArrowRight } from "react-icons/fi";
import { ArticleCard } from "./ArticleCard";
import { ARTICLES } from "../../lib/data/articles";
import { Article } from "../../types/article";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { page } from "../../lib/page";
import { LinkT } from "../ui/Link";

// Titles of the featured articles, in the order they're shown.
const FEATURED = [
  "Why Google stores billions of lines of code in a single repository",
  "Rust Is The Future of JavaScript Infrastructure",
  "Key Difference Between TCP/IP And OSI Model",
];

const featuredArticles = FEATURED.map((title) =>
  ARTICLES.find((article) => article.title === title),
).filter((article): article is Article => article !== undefined);

export const FeaturedArticles = () => {
  return (
    <Section>
      <Heading>Featured Articles 📝</Heading>
      <div className="flex flex-col lg:flex-row">
        {featuredArticles.map((article) => (
          <ArticleCard
            title={truncateText(article.title, 70)}
            authors={article.authors}
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
    </Section>
  );
};
