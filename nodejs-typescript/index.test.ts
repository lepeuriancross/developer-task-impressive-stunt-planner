import { describe, expect, test } from '@jest/globals';
import maxArea from './index';

// Test cases
describe('maxArea', () => {
	test('Example 1: [1, 8, 6, 2, 5, 4, 8, 3, 7] should return 49', () => {
		expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
	});
	test('Example 2: [1, 1] should return 1', () => {
		expect(maxArea([1, 1])).toBe(1);
	});
	test('Example 3: [4, 3, 2, 1, 4] should return 16', () => {
		expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
	});
	test('There must be at least 2 buildings to span a tightrope', () => {
		expect(maxArea([1])).toBe(0);
	});
	test('The array of heights cannot be empty', () => {
		expect(maxArea([])).toBe(0);
	});
	test('The height of the buildings must be between 1 and 104', () => {
		expect(maxArea([0, 105])).toBe(0);
	});
});
