import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function useEditArticle() {
  const { user } = useUser();
  const router = useRouter();

  const handleSubmitForm = async (
    e: FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    const description: string = e.target.description.value;
    const content: string = e.target.content.value;

    const data = {
      id: id,
      ...(description && { description: description }),
      ...(content && { content: content }),
    };

    try {
      await axios.put("/api/articles", data);

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
