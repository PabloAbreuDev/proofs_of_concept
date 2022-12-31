import { MongoMemoryServer } from "mongodb-memory-server";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";

let mongoMock: MongoMemoryServer;
beforeAll(async () => {
  mongoMock = await connectDB();
});

afterAll(async () => {
  await dropDB(mongoMock);
});

afterEach(async () => {
  await dropCollections(mongoMock);
});
