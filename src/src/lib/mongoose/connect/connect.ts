import mongoose from "mongoose";

const MONGO_CONNECTION_URI = process.env.MONGO_CONNECTION_URI!;

mongoose.set("strictPopulate", false);

if (!MONGO_CONNECTION_URI) {
  throw new Error(
    "Please define the MONGO_CONNECTION_URI environment variable inside .env.local"
  );
}

interface CachedMongoose {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Mongoose> | null;
}

let cached: CachedMongoose = { conn: null, promise: null };

async function connectToDatabase(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(MONGO_CONNECTION_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    const mongooseInstance = await cached.promise;
    cached.conn = mongooseInstance.connection;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
