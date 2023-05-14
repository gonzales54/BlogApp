import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleModel from "@/lib/mongoose/models/ArticleModel";
import IArticle from "@/types/Article/IArticle";

export default class ArticleService {
  async connectToDatabase() {
    await connectToDatabase();
  }

  static async getArticlesLimitSeven() {
    const articles: IArticle[] = JSON.parse(
      JSON.stringify(await ArticleModel.find({}).limit(7))
    );
    return articles;
  }

  static async getAllArticles() {
    const articles: IArticle = JSON.parse(
      JSON.stringify(await ArticleModel.find({}))
    );
    return articles;
  }
}

const Article = new ArticleService();
Article.connectToDatabase();
