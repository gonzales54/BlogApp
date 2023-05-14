import { Model, Schema, model } from "mongoose";
import IArticle from "@/types/Article/IArticle";

let Article: Model<IArticle>;

try {
  Article = model<IArticle>("Article");
} catch (e) {
  const ArticleSchema = new Schema(
    {
      userID: String,
      title: String,
      photoURL: String,
      description: String,
      content: String,
      slug: String,
      publish: Boolean,
      categories: [
        {
          type: Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  Article = model<IArticle>("Article", ArticleSchema);
}

export default Article;