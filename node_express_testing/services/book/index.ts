import { Book, IBook } from "../../models/book";
import { isValidateBookOptions } from "./util";

export class BookService {
  public async create(book: IBook): Promise<IBook | undefined> {
    isValidateBookOptions(book);
    try {
      const newBook = new Book(book);
      await newBook.save();
      return newBook;
    } catch (err) {
      throw Error("Something went wrong");
    }
  }
}
