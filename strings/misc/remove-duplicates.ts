/**
 * 
 * @param input Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
the smallest in lexicographical order
among all possible results.
 * @returns 
 */

function removeDuplicateLetters(input: string): string {
    const s: Array<string> = [];
    const mapIdx = [...input].reduce((acc, char) => {
        if (acc[char]) return acc;
        acc[char] = {
            visited: false,
            pos: input.lastIndexOf(char)
        };
        return acc;
    }, {});

    for (let i = 0; i < input.length; i += 1) {
        const char = input[i];
        if (mapIdx[char].visited) continue;
        if (!s.length) {
            s.push(char);
            mapIdx[char].visited = true;
        } else {
            while (s[0] && char < s[s.length - 1] && i < mapIdx[s[s.length - 1]].pos)
                mapIdx[s.pop() as string].visited = false;
            s.push(char);
            mapIdx[char].visited = true;
        }
    }
    return s.join('');
}