import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
import EditArticleForm from "@/components/EditArticleForm/EditArticleForm";
import ArticleService from "@/service/ArticleService/ArticleService";
import IArticle from "@/types/Article/IArticle";

export default function EditArticle({ article }: { article: IArticle }) {
  return (
    <>
      <main>
        <EditArticleForm article={article} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { uid } = ctx.query;
    const article: IArticle = await ArticleService.getAnArticle(
      ctx.query.article!
    );
    console.log(article);

    if (uid !== process.env.AUTH0_USER_NICKNAME) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article: article,
      },
    };
  },
});

EditArticle.getLayout = function getLayout(page: ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
