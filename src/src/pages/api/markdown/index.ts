import ArticleService from "@/service/ArticleService/ArticleService";
import ICreateArticle from "@/types/Article/ICreateArticle";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Markdown(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    const file = matter(req.body);

    const formData = file.data;
    const title: string = formData.title;
    const description: string = formData.description;
    const slug: string = formData.slug;
    const publish: boolean = formData.publish;

    const content: string = file.content;

    const data: ICreateArticle = { title: title, description: description, content: content, slug: slug, categories: [], publish: publish }

    const article = await ArticleService.createAnArticleWithData(data);

    res.status(200).json({
      message: "ArticleModel created successfully.",
      article: article,
    });
  }
};
