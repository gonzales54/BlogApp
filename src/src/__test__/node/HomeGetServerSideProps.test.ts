import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongoose/connect/connect";
import { getServerSideProps as IndexGetServerSideProps } from "@/pages";

describe("Test getServerSideProps of index.tsx", () => {
  beforeAll(async () => {
    await connectToDatabase();
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it("getServerSideProps of index.tsx result to be not null", async () => {
    const { props } = await IndexGetServerSideProps();

    expect(props.article).not.toBeNull();
    expect(props.articles.length).toBe(6);
    expect(props.categories.length).toBe(4);
  });
});
