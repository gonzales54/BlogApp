import { BackPreviousURLButton } from "../Button/button";
import style from "./CreateArticleForm.module.scss";
import useCreateArticle from "./useCreateArticle";
import useSendMarkdownFile from "./useSendMarkdownFile";

export default function CreateArticleForm() {
  const { markdownFileName, onSubmitForSendMarkdownFile } =
    useSendMarkdownFile();
  const handleSubmitForm = useCreateArticle();

  return (
    <div className={style.createArticleForm}>
      <div className={style.formHeader}>
        <h2 className={style.title}>新しい記事の作成</h2>
        <label htmlFor="markdownFile" className={style.markdownFile}>
          {markdownFileName}
          <input
            type="file"
            name="markdownFile"
            id="markdownFile"
            onChange={onSubmitForSendMarkdownFile}
          />
        </label>
      </div>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <div className={style.formItem}>
          <label htmlFor="articleTitle">タイトル</label>
          <input
            type="text"
            name="articleTitle"
            id="articleTitle"
            placeholder="タイトル"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="description">記事の説明</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="記事の説明"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="content">コンテンツ</label>
          <textarea
            name="content"
            id="content"
            rows={12}
            cols={30}
            placeholder="記事のコンテンツ"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="slug">スラグ</label>
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="記事のスラグ"
          />
        </div>
        <div className={style.formButtonContainer}>
          <BackPreviousURLButton />
          <button type="submit" className={style.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
