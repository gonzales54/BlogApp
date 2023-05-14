import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function useCreateArticle() {
  const router = useRouter();
  const { user } = useUser();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    const title: string = e.target.articleTitle.value;
    const description: string = e.target.description.value;
    const content: string = e.target.content.value;
    const slug: string = e.target.slug.value;

    try {
      await axios.post("/api/articles", {
        title: title,
        description: description,
        content: content,
        slug: slug,
        publish: true,
      });

      router.push(`/${user?.nickname}/`);
      e.target.reset();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return handleSubmitForm;
}
