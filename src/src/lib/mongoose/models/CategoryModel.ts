import { Model, Schema, model } from "mongoose";
import ICategory from "@/types/Category/ICategory";

let Category: Model<ICategory>;

try {
  Category = model<ICategory>("Category");
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

  Category = model<ICategory>("Category", CategorySchema);
}

export default Category;