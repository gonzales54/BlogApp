import Head from "next/head";
import ArticleService from "@/service/ArticleService/ArticleService";
import CategoryService from "@/service/CategoryService/CategoryService";
import IArticle from "@/types/Article/IArticle";
import ICategory from "@/types/Category/ICategory";
import { ReactElement } from "react";
import Layout from "@/components/Layout/layout";
import GridArticle from "@/components/GridArticle/GridArticle";
import CategoryButton from "@/components/CategoryButton/CategoryButton";
import TopArticle from "@/components/TopArticle/TopArticle";

export default function Home({
  article,
  articles,
  categories,
}: {
  article: IArticle
  articles: IArticle[];
  categories: ICategory[];
}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is a tech blog. i will create article of programming. JavaScript, Nextjs, Laravel, etc..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopArticle article={article}/>
        <GridArticle articles={articles}/>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const articles: IArticle[] = await ArticleService.getArticlesLimitSeven();
  const categories: ICategory[] = await CategoryService.getAllCategories();
  
  const topArticles: IArticle | null = articles.length
  ? articles.slice(0, 1)[0]
  : null;
  const gridArticles: IArticle[] = articles.slice(1, 7);

  return {
    props: {
      article: topArticles,
      articles: gridArticles,
      categories: categories,
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}