/**
 * Find a middle/median element of given Linked List.
 *
 * Effective realization uses Nick Parlante's algorithm based on two pointers, sometimes denoted as rabbit and tortoise.
 * Complexity: O(N/2)
 */

/**
 * @param {Object} list - Linked List
 * @example
 * { data: 1, next: { data: 2, next: null } }
 *
 * @return {Object} reference to node which is middle element of given list
 */
function getMedianItem ( list ) {
    let slowPointer = list;
    let fastPointer = list;

    while ( fastPointer ) {
        if ( !fastPointer.next ) break;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
}

// driver code
const node = (data, next) => ({data, next});
const createSingleLinkedList = dataset => {
    return dataset.reduceRight((head, item) => node(item, head), null);
};

// tests
console.assert(getMedianItem(createSingleLinkedList([100, 0, 1, 3, 2022])).data === 1);
console.assert(getMedianItem(createSingleLinkedList(['foo', 'bar'])).data === 'bar');
console.assert(getMedianItem(createSingleLinkedList([1, 2, 3, 4, 5, 6, 7])).data === 4);
console.assert(getMedianItem(createSingleLinkedList([1000, 2000, 4000, 0])).data === 4000);