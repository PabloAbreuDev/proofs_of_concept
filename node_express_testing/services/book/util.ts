import { IBook } from "../../models/book";

export function isValidateBookOptions(book: IBook): boolean {
  if (!book.title) {
    throw Error("Inform a valid title");
  }

  if (!book.description) {
    throw Error("Inform a valid description");
  }

  if (!book.numPages) {
    throw Error("Inform a valid number of pages");
  }
  return true;
}
