import useNavigate from "@/hooks/useNavigate";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function useSendMarkdownFile() {
  const [markdownFileName, setMarkdownFileName] = useState<string>(
    "マークダウンファイルを選択してください"
  );
  const { authNavigate } = useNavigate();

  const onSubmitForSendMarkdownFile = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;

    const file = e.target.files![0];
    setMarkdownFileName(file.name);

    await axios.post("/api/markdown", file, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    e.target.files = null;
    authNavigate();
  };

  return {
    markdownFileName,
    onSubmitForSendMarkdownFile,
  };
}
