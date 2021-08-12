import { mean, median, mode, stdDeviation } from "@/utils/statsGuruCalculator";

const testArray = [3, 5, 4, 4, 1, 1, 2, 3];

test("test Mean properly", () => {
  expect(mean(testArray)).toBe(2.875);
});

test("test Median properly", () => {
  expect(mean(testArray)).toBe(3);
});

test("test Mode properly", () => {
  expect(mean(testArray)).toBe(1,3,4);
});

test("test Standard Deviation properly", () => {
  expect(mean(testArray)).toBe(1.364);
});
