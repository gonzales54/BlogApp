import connectToDatabase from "@/lib/mongoose/connect/connect";
import CategoryModel from "@/lib/mongoose/models/CategoryModel";

export default class CategoryService {
  async connectToDatabase() {
    await connectToDatabase();
  }

  static async getAllCategories() {
    const categories = JSON.parse(JSON.stringify(await CategoryModel.find({})));
    return categories;
  }

  static async getCategoriesWithoutSelf(categoryID: string) {
    const categories = JSON.parse(
      JSON.stringify(await CategoryModel.find({ _id: { $ne: categoryID } }))
    );
    return categories;
  }

  static async getAllArticlesBelongToCategory(categoryID: string) {
    const articles = JSON.parse(
      JSON.stringify(
        await CategoryModel.findOne({ _id: categoryID })
          .populate("articles")
          .exec()
      )
    );
    return articles;
  }
}

const Category = new CategoryService();
Category.connectToDatabase();
