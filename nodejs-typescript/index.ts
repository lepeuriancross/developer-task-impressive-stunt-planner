function maxArea(height: number[]): number {
	// Defaults
	let ma = 0;

	// If constraints: 2 <= n <= 105 /  n == height.length /  0 <= height[i] <= 104
	if (
		height.length < 2 ||
		height.length > 105 ||
		!height.length ||
		height.some((h) => h <= 0 || h > 104)
	) {
		return ma;
	}

	// Loop heights
	for (let n1 = 0; n1 < height.length; n1++) {
		for (let n2 = n1; n2 < height.length; n2++) {
			if (n1 !== n2) {
				// A rectangle must be formed using 90 degree angles (presumably the tightrope must be 100% horizontal)
				// Therefore, we only need to multiply the width and the height of the rectangle to get the area
				// Otherwise we'd have used the square area formula: A = a²

				// So, we take the SMALLEST height * area width = area
				const h = Math.min(height[n1], height[n2]);
				const w = n2 - n1;
				const a = w * h;

				// If this area is larger than the current max area
				if (a > ma) {
					// Update max area
					ma = a;
				}
			}
		}
	}

	// Return the max area
	return ma;
}

// Export for jest
export default maxArea;
