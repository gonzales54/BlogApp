import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import style from "./CreateArticleForm.module.scss";
import useCreateArticle from "@/hooks/useCreateArticle";

export default function CreateArticleForm() {
  const router = useRouter();
  const handleSubmitForm = useCreateArticle();
  const { user } = useUser();

  const sendMarkdownFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;

    const file = e.target.files![0];

    await axios.post("/api/markdown", file, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    e.target.files = null;
    router.push(`/${user?.nickname}/`);
  };

  return (
    <div className={style.createArticleForm}>
      <div className={style.formHeader}>
        <h2 className={style.title}>Create New Article</h2>
        <label htmlFor="markdownFile" className={style.markdownFile}>
          Choose Markdown File
          <input
            type="file"
            name="markdownFile"
            id="markdownFile"
            onChange={sendMarkdownFile}
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
            placeholder="input article title"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="description">記事の説明</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="input article description"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="content">コンテンツ</label>
          <textarea
            name="content"
            id="content"
            rows={12}
            cols={30}
            placeholder="input article content"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="slug">スラグ</label>
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="input article slug"
          />
        </div>
        <div className={style.formButtonContainer}>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <button type="submit" className={style.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
