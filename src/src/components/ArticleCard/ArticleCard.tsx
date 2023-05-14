import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.scss";

import IArticle from "@/types/Article/IArticle";
import StyleInterface from "@/types/StyleInterface/StyleInterface";
import convertDateToYYMMDD from "@/utility/ConvertDateToYYMMDD";
import { kleeOne, roboto } from "@/utility/font";
import NaturePhoto from "@Image/nature.jpg";

export default function ArticleCard({
  style = styles,
  article,
}: {
  style?: StyleInterface;
  article: IArticle;
}) {
  return (
    <article className={`${kleeOne.className} ${style.articleCard}`}>
      <Link href={`/articles/${article.slug}`} className={style.articleLink}>
        <div className={style.imageWrapper}>
          <Image width={0} height={0} src={NaturePhoto} alt="" className="" />
        </div>
        <div className={style.articleContent}>
          <span
            className={`${roboto.className} ${style.createdAt}`}
            suppressContentEditableWarning
          >
            {convertDateToYYMMDD(article.createdAt)}
          </span>
          <h3 className={`${kleeOne.className} ${style.title}`}>
            {article.title}
          </h3>
          <p className={`${kleeOne.className} ${style.description}`}>
            {article.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
