import { test, it, expect } from "vitest";
import { add } from "./math";

it("should return the total value of array", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
