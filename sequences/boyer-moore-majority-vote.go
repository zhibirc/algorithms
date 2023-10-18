/*
Implementation of Boyer–Moore majority vote algorithm.

See: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

Complexity: O(N) time and O(1) space
*/

package sequences

func findMajority(items []int) any {
	var count int = 0
	var candidate any

	for i := 0; i < len(items); i++ {
		// check votes count and if it's 0 choose another candidate
		if count == 0 {
			candidate = items[i]
		}
		if items[i] == candidate {
			count++
		} else {
			count--
		}
	}

	// if we know that input sequence always has majority element, just return candidate
	// if we're in doubt, check if cou
	count = 0

	for i := 0; i < len(items); i++ {
		if items[i] == candidate {
			count++
		}
	}

	if count > len(items)/2 {
		return candidate
	}

	return nil
}

func main() {
	// todo: add examples
}
