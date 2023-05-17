import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleModel from "@/lib/mongoose/models/ArticleModel";
import IArticle from "@/types/Article/IArticle";
import ICreateArticle from "@/types/Article/ICreateArticle";
import IEditArticle from "@/types/Article/IEditArticle";
import ConvertToJSON from "@/utility/ConvertToJSON";

export default class ArticleService {
  static async connectToDatabase() {
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

  static async createAnArticleWithData(data: ICreateArticle) {
    const article = ConvertToJSON<IArticle>(
      await new ArticleModel(data).save()
    );
    return article;
  }

  static async updateAnArticleWithID(id: string, values: IEditArticle) {
    const article: IArticle = ConvertToJSON<IArticle>(
      await ArticleModel.findOneAndUpdate({ _id: id }, values)
    );
    return article;
  }

  static async deleteAnArticleWithID(id: string): Promise<void> {
    await ArticleModel.findOneAndDelete({ _id: id });
  }
}
