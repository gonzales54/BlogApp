import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import CreateArticleForm from "@/components/CreateArticleForm/CreateArticleForm";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";

export default function CreateArticle() {
  return (
    <>
      <main>
        <CreateArticleForm />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { uid } = ctx.query;
    if (uid !== process.env.AUTH0_USER_NICKNAME) {
      return {
        notFound: true,
      };
    }
    return {
      props: {},
    };
  },
});
CreateArticle.getLayout = function getLayout(page: ReactElement) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
