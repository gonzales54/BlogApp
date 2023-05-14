import { Schema } from "mongoose";
import IArticle from "../Article/IArticle";

export default interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  picture: string;
  articles: Schema.Types.ObjectId[] | IArticle[];
  createdAt: Date;
  updatedAt: Date;
}