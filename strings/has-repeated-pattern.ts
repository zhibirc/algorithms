// Repeated Substring Pattern

// version 1
// complexity: O(N/2 + N/1 + N/2 + N/3 + N/... + N/(N/2)) ->
// O(N/2 + N/1 + N/2 + N/3 + N/... + 2) ->
// O(N + N + N/2 + N/3 + N/...) ->
// O(N^2)
// function repeatedSubstringPattern(s: string): boolean {
//     for (let i = 1, lim = s.length >> 1; i <= lim; i += 1) {
//         if (s.slice(0, i).repeat(s.length / i) === s) return true;
//     }

//     return false;
// }

// version 2
function repeatedSubstringPattern(s: string): boolean {
    return /^(.+)\1+$/.test(s);
}