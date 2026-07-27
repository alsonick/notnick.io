import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { generateRandomId } from "../lib/generate-random-id";
import { removeDuplicates } from "../lib/remove-duplicates";
import { FilterListBox } from "../components/FilterListBox";
import { ArticlesList } from "../components/ArticlesList";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Article, Tag } from "../types/article";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ARTICLES } from "../lib/articles";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { page } from "../lib/page";
import { useState } from "react";

// Next.js
import { NextPage } from "next";

const Articles: NextPage = () => {
  let tags: Tag[] = [
    {
      id: generateRandomId(),
      filter: capitalizeFirstLetter("all"),
    },
  ];

  const [selected, setSelected] = useState(tags[0].filter);
  const [query, setQuery] = useState("");

  ARTICLES.forEach((article) => {
    article.tags.forEach((tag) => {
      tags.push(tag);
    });
  });

  let filteredArticlesList: Article[] = [];

  ARTICLES.forEach((article) => {
    article.tags.filter((tag) => {
      if (tag.filter === selected) {
        filteredArticlesList.push(article);
      }
    });
  });

  const search = query.trim().toLowerCase();

  const articlesList: Article[] = (
    !filteredArticlesList.length ? ARTICLES : filteredArticlesList
  ).filter((article) => {
    if (!search) return true;

    return (
      article.title.toLowerCase().includes(search) ||
      article.type.toLowerCase().includes(search) ||
      article.authors.some((author) => author.toLowerCase().includes(search)) ||
      article.tags.some((tag) => tag.filter.toLowerCase().includes(search))
    );
  });

  return (
    <>
      <Seo
        title={`${page.articles.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />

      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={false} column={false}>
              <Heading style={{ marginBottom: 0 }}>
                {page.articles.title}
              </Heading>
              <FilterListBox
                items={removeDuplicates(tags)}
                selectedItem={selected}
                onChange={setSelected}
              />
            </Header>
            <div className="mb-6">
              <Input
                placeholder="Search articles..."
                style={{ width: "100%" }}
                type="search"
                aria-label="Search articles"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            {articlesList.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                <ArticlesList articles={articlesList} />
              </div>
            ) : (
              <div className="mb-4">
                <Text>No articles found for &quot;{query.trim()}&quot;.</Text>
              </div>
            )}
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};
//
export default Articles;
