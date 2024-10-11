// Given a list of non-negative integers, find the minimum number of merge operations to make it a palindrome. A merge operation can only be performed on two adjacent elements. The result of a merge operation is that the two adjacent columns are replaced with their sum. To make any array a palindrome, we can simply apply the merge operation n-1 times, where n is the size of the array (because a single-element array is always palindromic, similar to a single-character string). In that case, the size of the array will be reduced to 1.


// Example



// Input:

// 4

// 6

// 1

// 3

// 7

// Output:

// 1

// Explanation:

// The first input is the size of the array, followed by array elements [6, 1, 3, 7].

// Merge 6 & 1, i.e., 6+1 = 7, and now it is 7 3 7, and it is a palindrome.

