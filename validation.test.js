import { it, expect } from "vitest";

it("should return an array of numbers if an array of string numbers are provided", () => {
  const numbers = ["1", "2"];

  const result = cleanNumbers(numbers);

  expect(result[0]).toBeTypeOf("number");
});
