import supertest from "supertest";
import { SetupServer } from "../../../server";

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
