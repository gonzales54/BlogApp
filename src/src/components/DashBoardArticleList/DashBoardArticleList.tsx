import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { DeleteIcon, EditIcon, ExternalLinkIcon } from "../Icon/icon";
import style from "./DashBoardArticleList.module.scss";
import IArticle from "@/types/Article/IArticle";
import { kleeOne } from "@/utility/font";

export default function DashBoardArticleList({
  articles,
}: {
  articles: IArticle[];
}) {
  const [isHoverArticle, setHoverArticle] = useState<boolean>(false);
  const { user } = useUser();
  const router = useRouter();

  function redirectToEditArticlePage(userName: string, articleID: string) {
    router.push(`/${userName}/${articleID}/edit`);
  }

  async function deleteArticle(id: string) {
    try {
      await axios.delete("/api/articles", {
        data: {
          _id: id,
        },
      });

      router.reload();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  return (
    <div className={style.dashBoardArticleList}>
      <h2 className={`${kleeOne.className} ${style.title}`}>記事一覧</h2>
      <div className={style.articleList}>
        {articles
          ? articles.map((article: IArticle) => {
              return (
                <article
                  className={style.article}
                  key={article._id.toString()}
                  onMouseEnter={() => setHoverArticle(true)}
                  onMouseLeave={() => setHoverArticle(false)}
                >
                  <h3 className={style.articleTitle}>{article.title}</h3>
                  <div className={style.articleButtonContainer}>
                    <button
                      type="button"
                      className={style.handleArticleButton}
                      onClick={() =>
                        redirectToEditArticlePage(
                          user?.nickname!,
                          `${article.slug}`
                        )
                      }
                    >
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      className={style.handleArticleButton}
                      onClick={() => deleteArticle(article._id.toString())}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </article>
              );
            })
          : "No Articles"}
      </div>
    </div>
  );
}
