import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import style from "./ArticleBody.module.scss";
import IArticle from "@/types/Article/IArticle";
import convertDateToYYMMDD from "@/utility/ConvertDateToYYMMDD";
import { kleeOne } from "@/utility/font";

export default function ArticleBody({ article }: { article: IArticle }) {
  return (
    <div className={style.container}>
      <div className={style.dateInformation}>
        <span className={style.createdAt} suppressHydrationWarning>
          {convertDateToYYMMDD(article.createdAt)}
        </span>
      </div>
      <h2 className={`${kleeOne.className} ${style.articleTitle}`}>
        {article.title}
      </h2>
      <div className={style.markdown}>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p {...props} />,
            code: ({ node, ...props }) => {
              return (
                <div className={style.codeBlock}>
                  {/*
                  <div className={style.codeBlockHeader}>
                    <p className={style.codeTitle}>Lorem ispum</p>
                    <button className={style.copyButton}>Copy Code</button>
                  </div>
                  */}
                  <div>
                    <SyntaxHighlighter
                      language="javascript"
                      className={style.codeHighLight}
                      style={coldarkDark}
                    >
                      {props.children.toString()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              );
            },
            blockquote: ({ node, ...props }) => {
              return <blockquote className="blockquote" {...props} />;
            },
          }}
          className={`${kleeOne.className}`}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
