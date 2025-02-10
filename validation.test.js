import { it, expect, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  it("should validate a correct email address", () => {
    const email = "example@gmail.com";
    const wrapperFN = () => validateEmail(email);
    expect(wrapperFN).not.toThrow();
  });

  it("should throw an error for an invalid email address", () => {
    const email = "example";
    const wrapperFN = () => validateEmail(email);
    expect(wrapperFN).toThrow();
  });

  it("should throw an error for an empty string", () => {
    const email = "";
    const wrapperFN = () => validateEmail(email);
    expect(wrapperFN).toThrow();
  });

  it("should throw an error for null", () => {
    expect(() => validateEmail(null)).toThrow("Invalid email format");
  });

  it("should throw an error for undefined", () => {
    expect(() => validateEmail(undefined)).toThrow("Invalid email format");
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should validate a non empty array", () => {
    const array = [2, 4, 5];
    const wrapperFN = () => validateArrayNotEmpty(array);
    expect(wrapperFN).not.toThrow();
  });

  it("should throw an error for empty array", () => {
    expect(() => validateArrayNotEmpty([])).toThrow("Array must not be empty");
  });

  it("should throw an error for null", () => {
    expect(() => validateArrayNotEmpty(null)).toThrow(
      "Array must not be empty"
    );
  });

  it("should throw an error for undefined", () => {
    expect(() => validateArrayNotEmpty(undefined)).toThrow(
      "Array must not be empty"
    );
  });
});
