import { it, expect } from "vitest";
import { stringLength } from "./stringLength";

it("should return the correct length for nom empty string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("world")).toBe(5);
  expect(stringLength("hello world")).toBe(11);
});

it("should return 0 for empty string", () => {
  expect(stringLength("")).toBe(0);
});

it("should throw an error for non string value", () => {
  expect(() => {
    stringLength(null);
  }).toThrow();
  expect(() => {
    stringLength(undefined);
  }).toThrow();
  expect(stringLength(123)).toBeUndefined();
});
