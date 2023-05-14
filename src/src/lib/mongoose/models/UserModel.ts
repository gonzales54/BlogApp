import { Model, Schema, model } from "mongoose";
import IUser from "@/types/User/IUser";

let UserModel: Model<IUser>;

try {
  UserModel = model<IUser>("User");
} catch (e) {
  const UserSchema = new Schema(
    {
      name: String,
      email: String,
      picture: String,
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

  UserModel = model<IUser>("User", UserSchema);
}

export default UserModel;