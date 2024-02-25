import { MaxAreaData } from '../types';

// Passing an array of integers called 'height' of length 'n'
export function maxAreaData(height: number[]): MaxAreaData {
	// Defaults
	let returnData: MaxAreaData = null;
	let ma = 0;

	// If constraint: 2 <= n <= 105
	if (height.length < 2 || height.length > 105) {
		return {
			success: false,
			error: 'There must be at least 2 buildings to span a tightrope',
		};
	}

	// If constraint: n == height.length
	if (!height.length) {
		return {
			success: false,
			error: 'The array of heights cannot be empty',
		};
	}

	// If constraint: 0 <= height[i] <= 104
	if (height.some((h) => h <= 0 || h > 104)) {
		return {
			success: false,
			error: 'The height of the buildings must be between 1 and 104',
		};
	}

	// Loop heights
	for (let n1 = 0; n1 < height.length; n1++) {
		for (let n2 = n1; n2 < height.length; n2++) {
			if (n1 !== n2) {
				// Smallest height * area width = area
				const h = Math.min(height[n1], height[n2]);
				const w = n2 - n1;
				const a = w * h;

				// If this area is larger than the current max area
				if (a > ma) {
					// Update max area
					ma = a;

					// Update return data
					returnData = {
						success: true,
						n1,
						n2,
						w,
						h,
					};
				}
			}
		}
	}

	// Return the largest area
	return returnData;
}
