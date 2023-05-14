import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleModel from "@/lib/mongoose/models/ArticleModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  const session = getSession(req, res);
  if (!session?.user!) {
    return res.status(401).end();
  }

  if (req.method === "POST") {
    //const { category, ...values } = req.body;
    //const categories = await Category.findOneAndUpdate({ category: category });
    //const data = { ...values, categories: [categories?._id!] };
    const { ...values } = req.body;
    const data = { ...values, categories: [], userID: "1" };

    const article = await new ArticleModel(data).save();
    /*await Category.findOneAndUpdate(
      { category: category },
      {
        $push: {
          articles: [article._id]
        }
      }
    );*/

    res.status(200).json({
      message: "ArticleModel created successfully.",
      article: article,
    });
  }

  if (req.method === "PUT") {
    const { id, ...values } = req.body;

    const article = await ArticleModel.findOneAndUpdate({ _id: id }, values);
    res.status(200).json({
      message: "ArticleModel updated successfully.",
      article: article,
    });
  }

  if (req.method === "DELETE") {
    const article = await ArticleModel.findOneAndRemove({ _id: req.body._id });
    /*article?.categories.forEach(async (category) => {
      const categories = await Category.findOneAndUpdate(
        { _id: category },
        {
          $pullAll: {
            articles: [article?._id],
          },
        }
      );
      if (!categories?.articles.length) {
        Category.findOneAndRemove({ _id: category });
        return;
      }
      return;
    });*/
    res.status(200).json({ message: "ArticleModel deleted successfully." });
  }
}

export default withApiAuthRequired(handler);
