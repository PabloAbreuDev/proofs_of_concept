import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { Application } from "express";
import { BooksController } from "./api/controllers/book";

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();
    }
    private setupControllers(): void {
        const bookController = new BooksController();
        this.addControllers([bookController]);
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    public getApp(): Application {
        return this.app;
    }
}
