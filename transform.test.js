import { test, it, expect } from "vitest";
import { transform } from "./transform";

it("should return a number if string is provided", () => {
  const stringNumber = "5";

  const result = transform(stringNumber);

  expect(result).toBeTypeOf("number");
  expect(isNaN(result)).not.toBe(true);
});
