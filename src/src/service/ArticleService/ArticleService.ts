import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleModel from "@/lib/mongoose/models/ArticleModel";
import IArticle from "@/types/Article/IArticle";
import ConvertToJSON from "@/utility/ConvertToJSON";

export default class ArticleService {
  async connectToDatabase() {
    await connectToDatabase();
  }

  static async getAllArticles() {
    const articles: IArticle[] = ConvertToJSON<IArticle[]>(
      await ArticleModel.find({ publish: true }).sort({ createdAt: 1 })
    );
    return articles;
  }

  static async getArticlesLimitSeven() {
    const articles: IArticle[] = ConvertToJSON<IArticle[]>(
      await ArticleModel.find({ publish: true }).sort({ createdAt: 1 }).limit(7)
    );
    return articles;
  }

  static async getAnArticle(slug: string | string[]) {
    const article: IArticle = ConvertToJSON<IArticle>(
      await ArticleModel.findOne({ slug: slug })
    );
    return article;
  }
}
