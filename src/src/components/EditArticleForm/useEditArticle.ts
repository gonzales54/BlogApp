import axios from "axios";
import { FormEvent } from "react";
import useNavigate from "@/hooks/useNavigate";

export default function useEditArticle() {
  const { authNavigate } = useNavigate();
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
      e.target.reset();

      authNavigate();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };
  return handleSubmitForm;
}
