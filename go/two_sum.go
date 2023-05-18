package main

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Cases
[]int{2, 7, 11, 15}, 9)
[]int{3, 2, 3}, 6)
[]int{3, 3}, 6)
[]int{2, 5, 5, 11}, 10)
*/

func TwoSum(nums []int, target int) []int {
	var firsIndex int
	for i := 0; i < len(nums); i++ {
		firsIndex = i
		for j := i + 1; j < len(nums); j++ {
			if nums[firsIndex]+nums[j] == target {
				return []int{firsIndex, j}
			}
		}
	}
	return []int{}
}