/*
Check if a given string is a palindrome.
Return "true" if it's palindrome and "false" if it's not.

The proposed algorithm uses two pointers approach for checking complementary characters for equality.
If this invariant is violated use early return with negative result.

Complexity: O(N/2) -> O(N) time and O(1) space
*/

package main

import "fmt"

func isPalindrome(s string) bool {
	for i, j := 0, len(s)-1; i < len(s)>>1; i, j = i+1, j-1 {
		if s[i] != s[j] {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isPalindrome(""))        // true
	fmt.Println(isPalindrome("a"))       // true
	fmt.Println(isPalindrome("ab"))      // false
	fmt.Println(isPalindrome("aba"))     // true
	fmt.Println(isPalindrome("abc"))     // false
	fmt.Println(isPalindrome("abcd"))    // false
	fmt.Println(isPalindrome("abcdba"))  // false
	fmt.Println(isPalindrome("abccba"))  // true
	fmt.Println(isPalindrome("abcxcba")) // true
}
