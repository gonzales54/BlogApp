import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./GridArticle.module.scss";
import IArticle from "@/types/Article/IArticle";
import { kleeOne } from "@/utility/font";

export default function GridArticle({ articles }: { articles: IArticle[] }) {
  return (
    <div className={style.container}>
      <h2 className={`${kleeOne.className} ${style.gridArticleTitle}`}>
        最近の投稿
      </h2>
      <div className={style.articleContainer}>
        {articles.length
          ? articles.map((article: IArticle) => {
              return (
                <ArticleCard key={article._id.toString()} article={article} />
              );
            })
          : "No Articles"}
      </div>
    </div>
  );
}
