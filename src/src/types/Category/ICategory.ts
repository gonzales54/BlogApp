import { Schema } from "mongoose";
import IArticle from "../Article/IArticle";

export default interface ICategory {
  _id: Schema.Types.ObjectId;
  category: String;
  articles: Schema.Types.ObjectId[] | IArticle[];
  createdAt: Date;
  updatedAt: Date;
}