/**
 * 2^N (since each element could be absent or present)
 * @param {*} result 
 * @param {*} rest 
 */

function formSubsets(current: string, rest: string): void {
	if (rest === '') {
		console.log(current);
	} else {
		formSubsets(current + rest[0], rest.slice(1));
		formSubsets(current, rest.slice(1));
    }
}

