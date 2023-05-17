import { Schema } from "mongoose";
import ICategory from "../Category/ICategory";

export default interface ICreateArticle {
  title: string;
  description: string;
  content: string;
  slug: string;
  publish: boolean;
  categories: Schema.Types.ObjectId[] | ICategory[];
}
