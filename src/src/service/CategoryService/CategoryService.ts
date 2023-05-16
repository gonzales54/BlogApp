import connectToDatabase from "@/lib/mongoose/connect/connect";
import CategoryModel from "@/lib/mongoose/models/CategoryModel";
import ICategory from "@/types/Category/ICategory";
import ConvertToJSON from "@/utility/ConvertToJSON";

export default class CategoryService {
  static async connectToDatabase() {
    await connectToDatabase();
  }

  static async getAllCategories() {
    const categories = ConvertToJSON<ICategory[]>(
      await CategoryModel.find({}).sort({ category: 1 })
    );
    return categories;
  }

  static async getCategoriesWithoutSelf(categoryID: string) {
    const categories = ConvertToJSON<ICategory[]>(
      await CategoryModel.find({ _id: { $ne: categoryID } }).sort({
        category: 1,
      })
    );
    return categories;
  }

  static async getAllArticlesBelongToCategory(categoryID: string) {
    const articles = ConvertToJSON(
      await CategoryModel.findOne({ _id: categoryID })
        .populate("articles")
        .exec()
    );
    return articles;
  }
}
