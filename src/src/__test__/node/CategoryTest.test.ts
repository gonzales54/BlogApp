import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongoose/connect/connect";
import CategoryService from "@/service/CategoryService/CategoryService";
import ICategory from "@/types/Category/ICategory";

const TestCategory = [
  {
    category: "test",
    articles: [],
  },
  {
    category: "test1",
    articles: [],
  },
  {
    category: "test2",
    articles: [],
  },
  {
    category: "test3",
    articles: [],
  },
];

describe("Category Model Test", () => {
  beforeAll(async () => {
    await connectToDatabase();
    //await CategoryModel.create(TestCategory);
  });

  afterAll(async () => {
    //await CategoryModel.deleteMany({});
    mongoose.connection.close();
  });

  it("getAllCategories", async () => {
    const categories: ICategory[] = await CategoryService.getAllCategories();
    expect(categories.length).toBe(4);
  });

  it("getCategoriesWithoutSelf", async () => {
    const categories: ICategory[] = await CategoryService.getAllCategories();
    expect(categories.length).toBe(4);
  });
});
