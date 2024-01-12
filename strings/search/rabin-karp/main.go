package rabinkarp

import (
	"math"
	"math/big"
)

func getHash(s string, indexLeft int, indexRight int) int {
	// use Mersenne prime
	P := big.NewInt(int64(math.Pow(2, 31) - 1))
	resultHash := 0

	for ; indexLeft < indexRight; indexLeft += 1 {
		// @todo: implement
	}

	return resultHash
}

func search(needle string, haystack string, ignoreCollisions bool) int {
	m := len(needle)
	n := len(haystack)
	// precompute hashes for needle and for haystack's prefix of length m
	needleHash := getHash(needle, 0, m-1)
	haystackHash := getHash(haystack, 0, m-1)

	// our use case is tolerate for false-positives
	if ignoreCollisions {
		for i := 0; i < n-m; i += 1 {
			if needleHash == haystackHash {
				// skip comparing individual characters on corresponding positions in needle and haystack
				// theoretical (very low probability) assumption of false-positive equality
				return i
			}
			// if not match, recompute hash for sliding window in haystack using rolling polynomial hash
			// basing on existing has, without recomputing the hash for whole string
			// haystackHash = //
		}
	} else {
		for i := 0; i < n-m; i += 1 {
			if needleHash == haystackHash {
				for j, k := i, m-1; j < k; j, k = j+1, k-1 {
					// another choice is to compare random characters
					if needle[j] != haystack[i+j] {
						break
					}
					if needle[k] != haystack[i+k] {
						break
					}
				}
			}
			haystackHash = getHash(haystack, i+1, i+1+m)
		}
	}

	return -1
}
