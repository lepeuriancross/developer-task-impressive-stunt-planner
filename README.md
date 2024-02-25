# Planning an impressive stunt

Imagine you are a daredevil looking to walk a tightrope between two building. This tool calculates how you can traverse the largest (and most impressive) area between the available buildings in your city.

For this exercise, the downtown area is represented by an integer array. The individual buildings are the elements in the array and have a different heights.

Thus, you are given an array of integers called height of length n. There are n vertical lines (i.e., buildings) such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Your objective is to span a tightrope between two buildings where the area encompassed below your rope has the largest area. You'll need to find the two lines in the arraw that together with the x-axis form a rectangle, such that the rectangle has the largest area. Only then will your crowd of onlookers be impressed.

Write a function to return the maximum area of air that you could traverse on the tightrope.

You can't move the buildings, so you can't tilt or re-orient the rectangle. If there's a tall building in your way, you can open a window on both sides and span the rope through the building.

# Example A

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. Here the max area (blue section) you can traverse is 49.

# Example B

Input: height = [1,1]
Output: 1
