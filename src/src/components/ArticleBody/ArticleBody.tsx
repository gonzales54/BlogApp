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
        <span className={style.createdAt} suppressContentEditableWarning>
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
          unwrapDisallowed={false}
        >
          {article.content}
        </ReactMarkdown>
        {/*
          <p>
          Lorem ipsum dolor sit amet. Et aperiam totam et voluptas explicabo non
          quis laborum est voluptates impedit qui odit necessitatibus aut
          nostrum tempora ut ipsa omnis. Ad officia corrupti aut temporibus
          blanditiis in enim sunt At beatae voluptas. Vel repudiandae iste est
          recusandae omnis et voluptatem minima ut corporis autem est dolor odit
          hic quibusdam voluptates et architecto culpa. Qui galisum quod aut
          nesciunt dolores aut perferendis nesciunt ut sequi neque. Ad facere
          ducimus eos beatae sunt eum laudantium rerum ut perferendis ipsam.
        </p>
        <u>
          <p>
            Vel repudiandae iste est recusandae omnis et voluptatem minima ut
            corporis autem est dolor odit hic quibusdam voluptates et architecto
            culpa. Qui galisum quod aut nesciunt dolores aut perferendis
            nesciunt ut sequi neque. Ad facere ducimus eos beatae sunt eum
            laudantium rerum ut perferendis ipsam.
          </p>
        </u>
        <ul>
          <li>
            nesciunt ut sequi neque. Ad facere ducimus eos beatae sunt eum
            laudantium rerum ut perferendis ipsam.
          </li>
          <li>
            nesciunt ut sequi neque. Ad facere ducimus eos beatae sunt eum
            laudantium rerum ut perferendis ipsam.
          </li>
        </ul>
        <div className={style.codeBlock}>
          <div className={style.codeBlockHeader}>
            <p className={style.codeTitle}>Lorem ispum</p>
            <button className={style.copyButton}>Copy Code</button>
          </div>
          <code className={style.codeHighLight}>
            {`function greet(name) {
              console.log("Hello, " + name + "!");
              }
              greet("Hello World");`}
          </code>
        </div>
        <b>
          <p>
            Eos dolores mollitia aut ratione autem est facere nemo. Quo numquam
            accusantium ut modi galisum qui omnis beatae a voluptatem explicabo
            ab consequuntur tenetur! Ea numquam obcaecati eum placeat labore
          </p>
        </b>
        <p>
          Eos dolores mollitia aut ratione autem est facere nemo. Quo numquam
          accusantium ut modi galisum qui omnis beatae a voluptatem explicabo ab
          consequuntur tenetur! Ea numquam obcaecati eum placeat labore est
          culpa possimus et impedit voluptatem nam beatae adipisci et totam
          suscipit. Vel voluptatem inventore et eveniet necessitatibus et nihil
          animi aut vero provident id numquam nobis et quasi Quis cum architecto
          assumenda. Est quas voluptatem ut dolorum quam est pariatur quia sit
          enim expedita ea distinctio voluptates aut nihil doloribus et fuga
          voluptas. Eum neque veritatis non voluptatem veritatis et laboriosam
          tempore aut explicabo quod. Aut harum perspiciatis eos dignissimos
          nesciunt ex itaque deleniti. Sed voluptas incidunt sit cupiditate
          temporibus vel soluta dolorem est quaerat illo vel perspiciatis
          mollitia et placeat neque. Ut illo quisquam est nisi impedit et
          nostrum rerum sit eaque dolorem ut magni harum. Sed quia eaque ut
          neque veniam sed dolor accusamus sit odio molestiae est accusamus
          adipisci. Aut laborum quia sed corrupti rerum non dolore vero ut
          asperiores inventore quo galisum quia!
        </p> 
          
          */}
      </div>
    </div>
  );
}
