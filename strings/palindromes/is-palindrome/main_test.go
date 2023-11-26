package ispalindrome

import (
	"fmt"
	"testing"
)

func TestMain(t *testing.T) {
	fmt.Println(isPalindrome(""))        // true
	fmt.Println(isPalindrome("a"))       // true
	fmt.Println(isPalindrome("ab"))      // false
	fmt.Println(isPalindrome("aba"))     // true
	fmt.Println(isPalindrome("abc"))     // false
	fmt.Println(isPalindrome("abcd"))    // false
	fmt.Println(isPalindrome("abcdba"))  // false
	fmt.Println(isPalindrome("abccba"))  // true
	fmt.Println(isPalindrome("abcxcba")) // true

	res, err := isPalindrome()

	// @todo: implement

	// if res == false || err != nil {
	// 	t.Fatalf()
}
