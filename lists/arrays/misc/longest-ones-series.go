/**
 * Given an array of "0" and "1" only, return the longest sequence of "1"-s as its length.
 */

func getLongestSeries(source []int) int {
	var counter [len(source)]int

	for i := 0; i < len(source); i += 1 {
		if i == 0 {
			counter[0] = source[0]
		} else {
			counter[i] = source[i] == 1 ? counter[i - 1] + 1 : 0
		}
	  }
	  
	  return max(counter)
}