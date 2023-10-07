// Determine the maximum depth of nesting brackets in a given sequence.
//
// Given a string S contained the correct bracket sequence, calculate the maximum depth
// of nesting brackets. As mentioned, checking of bracket sequence correctness is out of scoup
// for the current task. Let's assume that a given string is a correct expression for this criteria.
//
// Let's use "()" as brackets.
//
// Complexity: O(N) time and O(1) space

package main

import "fmt"

func maxDepth(s string) int {
	// effectively handle corner case for "" (empty string) and "1" (single-character string)
	if len(s) < 2 {
		return 0
	}

	var depth, count int = 0, 0

	for i := 0; i < len(s); i += 1 {
		if s[i] == ')' {
			count -= 1
		} else if s[i] == '(' {
			count += 1
			if count > depth {
				depth = count
			}
		}
	}

	return depth
}

func main() {
	// todo: add test examples
	fmt.Println()
}
