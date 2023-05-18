import { ChangeEvent, useEffect, useState } from "react";
import { BackPreviousURLButton } from "../Button/button";
import style from "./EditArticleForm.module.scss";
import useEditArticle from "./useEditArticle";
import IArticle from "@/types/Article/IArticle";

export default function EditArticleForm({ article }: { article: IArticle }) {
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmitForm = useEditArticle();

  useEffect(() => {
    setDescription(article.description);
    setContent(article.content);
  }, [article.content, article.description]);

  /*function setMessages(e: InputEvent) {
    e.preventDefault();
    if(!(e.target instanceof HTMLDivElement)) return;
    console.log(e.target.textContent)
  }*/

  return (
    <div className={style.createArticleForm}>
      <h2 className={style.title}>記事の編集</h2>
      <form
        className={style.form}
        onSubmit={(e) => handleSubmitForm(e, article._id.toString())}
      >
        <div className={style.formItem}>
          <label htmlFor="description">記事の説明</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="content">コンテンツ</label>
          <textarea
            name="content"
            id="content"
            rows={12}
            cols={30}
            value={content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
        </div>
        {/**
         * <div contentEditable onInput={setMessages} style={{ height: '1rem', width: '100%' }}></div>
         */}
        <div className={style.formButtonContainer}>
          <BackPreviousURLButton />
          <button type="submit" className={style.submitBtn}>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
