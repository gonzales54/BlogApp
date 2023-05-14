import { useRouter } from "next/router";
import style from "./CreateArticleForm.module.scss";
import useCreateArticle from "@/hooks/useCreateArticle";

export default function CreateArticleForm() {
  const router = useRouter();
  const handleSubmitForm = useCreateArticle();
  return (
    <div className={style.createArticleForm}>
      <div className={style.formHeader}>
        <h2 className={style.title}>Create New Article</h2>
        <label htmlFor="markdownFile" className={style.markdownFile}>
          Choose Markdown File
          <input type="file" name="markdownFile" id="markdownFile" />
        </label>
      </div>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <div className={style.formItem}>
          <label htmlFor="articleTitle">Title</label>
          <input
            type="text"
            name="articleTitle"
            id="articleTitle"
            placeholder="input article title"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="input article description"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            rows={12}
            cols={30}
            placeholder="input article content"
          />
        </div>
        <div className={style.formItem}>
          <label htmlFor="slug">Slug</label>
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
