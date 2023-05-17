import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleService from "@/service/ArticleService/ArticleService";
import ICreateArticle from "@/types/Article/ICreateArticle";

async function Markdown(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  const session = getSession(req, res);
  if (!session?.user!) {
    return res.status(401).end();
  }
  if (req.method === "POST") {
    const file = matter(req.body);

    const formData = file.data;
    const title: string = formData.title;
    const description: string = formData.description;
    const slug: string = formData.slug;
    const publish: boolean = formData.publish;

    const content: string = file.content;

    const data: ICreateArticle = {
      title: title,
      description: description,
      content: content,
      slug: slug,
      categories: [],
      publish: publish,
    };

    const article = await ArticleService.createAnArticleWithData(data);

    res.status(200).json({
      message: "ArticleModel created successfully.",
      article: article,
    });
  }
}

export default withApiAuthRequired(Markdown);
