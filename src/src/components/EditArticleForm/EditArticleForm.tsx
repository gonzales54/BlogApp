import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./EditArticleForm.module.scss";
import useEditArticle from "@/hooks/useEditArticle";
import IArticle from "@/types/Article/IArticle";

export default function EditArticleForm({ article }: { article: IArticle }) {
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();
  const handleSubmitForm = useEditArticle();

  useEffect(() => {
    setDescription(article.description);
    setContent(article.content);
  }, []);

  return (
    <div className={style.createArticleForm}>
      <h2 className={style.title}>Edit Article</h2>
      <form
        className={style.form}
        onSubmit={(e) => handleSubmitForm(e, article._id.toString())}
      >
        <div className={style.formItem}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id=""
            rows={12}
            cols={30}
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
