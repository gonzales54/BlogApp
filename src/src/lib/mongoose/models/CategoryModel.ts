import { Model, Schema, model } from "mongoose";
import ICategory from "@/types/Category/ICategory";

let CategoryModel: Model<ICategory>;

try {
  CategoryModel = model<ICategory>("Category");
} catch (e) {
  const CategorySchema = new Schema(
    {
      category: String,
      articles: [
        {
          type: Schema.Types.ObjectId,
          ref: "Article",
        },
      ],
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  CategoryModel = model<ICategory>("Category", CategorySchema);
}

export default CategoryModel;