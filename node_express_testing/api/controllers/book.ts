import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { BookService } from "../../services/book";

@Controller("books")
export class BooksController {
  @Post("")
  public async create(req: Request, res: Response): Promise<void> {
    const bookService = new BookService();
    const response = await bookService.create(req.body);
    res.status(200).send(response);
  }
}
