import { test, it, expect } from "vitest";
import { add } from "./math";

//  AAA Pattern [Arrange, Action, Assert]
it("should return the total value of array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  //   Actions
  const result = add(numbers);

  //   Assertion
  expect(result).toBe(expectedResult);
});

it("should return NaNl value if string is provided", () => {
  // Arrange
  const numbers = [1, "invalid", 3];

  //   Actions
  const result = add(numbers);

  //   Assertion
  expect(result).toBeNaN();
});

it("should return sum of all string value", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

  //   Actions
  const result = add(numbers);

  //   Assertion
  expect(result).toBe(expectedResult);
});
