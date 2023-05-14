import Layout from "@/components/Layout/layout"
import { ReactElement } from "react"

export default function ArticlePage() {
  return (
    <>
      <main>1</main>
    </>
  )
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}