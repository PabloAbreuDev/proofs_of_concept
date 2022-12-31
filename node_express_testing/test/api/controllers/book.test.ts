import { MongoMemoryServer } from "mongodb-memory-server";
import supertest from "supertest";
import { SetupServer } from "../../../server";
import { connectDB, dropDB, dropCollections } from "../../setuptestdb";

describe("Book controller", () => {
  it("should call post correctly", async () => {
    const server = new SetupServer();
    await server.init();
    return supertest(server.getApp())
      .post("/books")
      .send({
        title: "Dom Casmurro",
        description: "Abcd efgh",
        numPages: 100,
      })
      .expect(200);
  });
});
