import { Schema } from "mongoose";
import ICategory from "../Category/ICategory";

export default interface IArticle {
  _id: Schema.Types.ObjectId;
  userID: string;
  title: string;
  description: string;
  content: string;
  categories: Schema.Types.ObjectId[] | ICategory[];
  slug: string;
  publish: boolean;
  createdAt: Date;
  updatedAt: Date;
}