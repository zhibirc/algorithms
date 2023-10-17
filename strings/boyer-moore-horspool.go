package strings

import "fmt"

func preprocess(pattern string) []int {
	m := len(pattern)
	res := make([]int, m)
	d := make(map[rune]int)

	for i, char := range pattern {
		d[char] = m - i - 1
	}

	for i, char := range pattern {
		res[i] = d[char]
	}

	return res
}

func search(needle string, haystack string) int {
	// implement
}

func main() {
	fmt.Printf("Index of \"bar\" in \"zoofoobarquux\": %s", search("bar", "zoofoobarquux"))
}
