import { describe, beforeAll, afterAll, it, expect } from "@jest/globals";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongoose/connect/connect";
import ArticleModel from "@/lib/mongoose/models/ArticleModel";
import ArticleService from "@/service/ArticleService/ArticleService";

const TestArticle = [
  {
    userID: "1",
    title: "title",
    description: "test",
    content: `# Hello`,
    categories: [],
    slug: "test-post",
    publish: true,
  },
  {
    userID: "1",
    title: "title",
    description: "test1",
    content: `# Hello1`,
    categories: [],
    slug: "test-post-1",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test2",
    content: `# Hello2`,
    categories: [],
    slug: "test-post-2",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test3",
    content: `# Hello3`,
    categories: [],
    slug: "test-post-3",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test4",
    content: `# Hello4`,
    categories: [],
    slug: "test-post-4",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test5",
    content: `# Hello5`,
    categories: [],
    slug: "test-post-5",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test6",
    content: `# Hello6`,
    categories: [],
    slug: "test-post-6",
    publish: false,
  },
  {
    userID: "1",
    title: "title",
    description: "test7",
    content: `# Hello7`,
    categories: [],
    slug: "test-post-7",
    publish: false,
  },
];

describe("Article Model Test", () => {
  beforeAll(async () => {
    await connectToDatabase();
    await ArticleModel.create(TestArticle);
  });

  afterAll(async () => {
    //await ArticleModel.deleteMany({});
    mongoose.connection.close();
  });

  it("getAllArticles result to be 8", async () => {
    const articles = await ArticleService.getAllArticles();
    expect(articles.length).toBe(1);
  });

  it("getArticlesLimitSeven result to be 7", async () => {
    const articles = await ArticleService.getArticlesLimitSeven();
    expect(articles.length).toBe(1);
  });
});
