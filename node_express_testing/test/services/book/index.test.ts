import { BookService } from "../../../services/book";

describe("Bookservice test", () => {
  it("Should create a book", async () => {
    const bookService = new BookService();
    const response = await bookService.create({
      description: "asdada",
      numPages: 1,
      title: "asda1",
    });
    expect(response).toHaveProperty("title");
  });

  it("Should return an error when not create correctly", async () => {
    const bookService = new BookService();

    expect(
      async () =>
        await bookService.create({
          description: "",
          numPages: 1,
          title: "asda1",
        })
    ).rejects.toThrow("Inform a valid description");
  });
});
