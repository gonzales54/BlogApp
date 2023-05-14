import { Model, Schema, model } from "mongoose";
import IUser from "@/types/User/IUser";

let User: Model<IUser>;

try {
  User = model<IUser>("User");
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

  User = model<IUser>("User", UserSchema);
}

export default User;