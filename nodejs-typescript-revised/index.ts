// Revised function - Used a two-point approach to optimise my solution. No more nested loops!
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
		// Return default
		return ma;
	}

	// Use two points, one starting from the left (index 0) and the other starting from the right (the last index of the array)
	let l = 0;
	let r = height.length - 1;

	// Iterate until the two points meet and calculate area between the two points
	while (l < r) {
		const currentArea = Math.min(height[l], height[r]) * (r - l);

		// Update the maximum area encountered so far
		ma = Math.max(ma, currentArea);

		// Move the point pointing to the shorter building inward
		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		}
	}

	// Return result
	return ma;
}

// Export for jest
export default maxArea;
