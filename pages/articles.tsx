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
import { Seo } from "../components/Seo";
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

  return (
    <>
      <Seo
        title={`Articles - ${FULL_NAME}`}
        description={`Nicholas Njoki - ${PROFESSION}`}
      />

      <Layout>
        <Animate>
          <Header singleItem={false} column={false}>
            <Heading style={{ marginBottom: 0 }}>Articles</Heading>
            <FilterListBox
              items={removeDuplicates(tags)}
              selectedItem={selected}
              onChange={setSelected}
            />
          </Header>
          <div className="flex flex-col mb-4">
            {!filteredArticlesList.length ? (
              <ArticlesList articles={ARTICLES} />
            ) : (
              <ArticlesList articles={filteredArticlesList} />
            )}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};
//
export default Articles;
