import connectToDatabase from "@/lib/mongoose/connect/connect";

class ArticleService {
  async connectToDatabase() {
    await connectToDatabase();
  }

  static async getAllArticles() {

  }

}

const Article = new ArticleService();
Article.connectToDatabase();

export default Article;