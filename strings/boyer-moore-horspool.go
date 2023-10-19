package strings

import "fmt"

// Construct that is called "Bad Match Table".
// Example: preprocess("abeccde") -> [6, 5, 4, 2, 2, 1, 4]
// Time complexity: O(2 * (M - 1)) -> O(M), i.e. linear, where M is pattern length
func preprocess(pattern string) []int {
	m := len(pattern)
	res := make([]int, m)
	d := make(map[rune]int)

	for i, char := range pattern[0 : m-1] {
		d[char] = m - i - 1
	}

	for i, char := range pattern[0 : m-1] {
		res[i] = d[char]
	}

	if v, ok := d[rune(pattern[m-1])]; ok {
		res[m-1] = v
	} else {
		res[m-1] = m
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
					return j
				}
			} else {
				if j < m-1 {
					i += d[m-1] - 1
				} else {
					i += d[j] - 1
				}
				break
			}
		}
	}

	return -1
}

func main() {
	fmt.Printf("Index of \"bar\" in \"zoofoobarquux\": %s", search("bar", "zoofoobarquux"))
}
