import { isValidateBookOptions } from "../../../services/book/util";

describe("Utils book service", () => {
  it("should return true when passing correct arguments", () => {
    expect(
      isValidateBookOptions({
        title: "Dom Casmurro",
        description:
          "Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu.",
        numPages: 112,
      })
    ).toBe(true);
  });

  it("should throw an error if passing invalid title", () => {
    expect(() =>
      isValidateBookOptions({
        title: "",
        description:
          "Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu.",
        numPages: 112,
      })
    ).toThrowError("Inform a valid title");
  });

  it("should throw an error if passing invalid description", () => {
    expect(() =>
      isValidateBookOptions({
        title: "Dom Casmurro",
        description: "",
        numPages: 112,
      })
    ).toThrowError("Inform a valid description");
  });

  it("should throw an error if passing invalid pageNumber", () => {
    expect(() =>
      isValidateBookOptions({
        title: "Dom Casmurro",
        description:
          "Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu.",
        numPages: 0,
      })
    ).toThrowError("Inform a valid number of pages");
  });
});
