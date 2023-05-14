import connectToDatabase from "@/lib/mongoose/connect/connect";

export default class UserService {
  static async connectToDatabase() {
    await connectToDatabase();
  }
}

