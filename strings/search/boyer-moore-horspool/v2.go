package boyermoorehorspool

import "fmt"

// Construct that is called "Bad Match Table" or "Shift Table".
// Example: preprocess("abeccde") -> [<97 preceding ASCII characters>, 6, 5, 2, 1, 4, <other ASCII characters>]
// Time complexity: O(M), i.e. linear, where M is pattern length.
// Space complexity: O(M) in the worst case (when each symbol is unique).
func preprocess(pattern string) []int {
	m := len(pattern)
	res := make([]int, 256)

	for i := range res {
		res[i] = m
	}

	for i, char := range pattern[0 : m-1] {
		res[char] = m - i - 1
	}

	return res
}

func search(needle string, haystack string) int {
	m := len(needle)
	n := len(haystack)
	d := preprocess(needle)

	for i := 0; i <= n-m; i++ {
		for j := m - 1; j >= 0; j-- {
			if haystack[i+j] == needle[j] {
				if j == 0 {
					// success, match found at index "i"
					return i
				}
			} else {
				i += d[haystack[i+j]] - 1
				// characters mismatched, so make a shift and break inner loop (stop traversing the pattern)
				break
			}
		}
	}

	return -1
}

func main() {
	// find at index 6
	fmt.Printf("index of \"bar\" in \"zoofoobarquux\": %d", search("bar", "zoofoobarquux"))
}
