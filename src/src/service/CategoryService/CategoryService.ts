import connectToDatabase from "@/lib/mongoose/connect/connect";

class CategoryService {
  async connectToDatabase() {
    await connectToDatabase();
  }

  static async getAllArticles() {

  }

}

const Category = new CategoryService();
Category.connectToDatabase();

export default Category;