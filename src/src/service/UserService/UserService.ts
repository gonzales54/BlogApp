import connectToDatabase from "@/lib/mongoose/connect/connect";

class UserService {
  async connectToDatabase() {
    await connectToDatabase();
  }
}

const User = new UserService();
User.connectToDatabase();

export default User;