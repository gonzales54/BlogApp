import ArticleBody from "@/components/ArticleBody/ArticleBody"
import Layout from "@/components/Layout/layout"
import ArticleService from "@/service/ArticleService/ArticleService"
import IArticle from "@/types/Article/IArticle"
import { GetServerSidePropsContext } from "next"
import { ReactElement } from "react"

export default function ArticlePage({ article }: { article: IArticle}) {
  return (
    <>
      <main>
        <ArticleBody article={article}/>
      </main>
    </>
  )
}

export const getServerSideProps = async(ctx: GetServerSidePropsContext) => {
  const article = await ArticleService.getAnArticle(ctx.query.article!)

  return {
    props: {
      article: article
    }
  }
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}