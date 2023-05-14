import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import DashBoardArticleList from "@/components/DashBoardArticleList/DashBoardArticleList";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
import ArticleService from "@/service/ArticleService/ArticleService";
import IArticle from "@/types/Article/IArticle";

export default function UserHome({ articles }: { articles: IArticle[] }) {
  return (
    <>
      <main>
        <DashBoardArticleList articles={articles} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { uid } = ctx.query;
    const articles: IArticle[] = await ArticleService.getAllArticles();

    if (uid !== process.env.AUTH0_USER_NICKNAME) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        articles: articles,
      },
    };
  },
});

UserHome.getLayout = function getLayout(page: ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
