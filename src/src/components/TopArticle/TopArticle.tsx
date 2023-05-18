import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./TopArticle.module.scss";
import useViewPort from "@/hooks/useViewPort";
import IArticle from "@/types/Article/IArticle";

export default function TopArticle({ article }: { article: IArticle }) {
  const { width } = useViewPort();

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
