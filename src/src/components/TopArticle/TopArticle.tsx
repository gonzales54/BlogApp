import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./TopArticle.module.scss";
import useTopArticle from "./useTopArticle";
import IArticle from "@/types/ArticleInterface";

export default function TopArticle({ article }: { article: IArticle }) {
  const { width } = useTopArticle();

  return (
    <div className={style.container}>
      {article ? (
        <ArticleCard
          style={width > 500 ? style : undefined}
          article={article}
        />
      ) : (
        ""
      )}
    </div>
  );
}
