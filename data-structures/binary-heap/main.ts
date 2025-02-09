abstract class PriorityQueue<T> {
    abstract insert(item: T): void;
    abstract extract(): T | undefined | void;
    abstract peek(): T | undefined;
}

class BinaryHeap<T> extends PriorityQueue<T> {
    #type: 'min' | 'max';
    #heap: T[] = [];

    constructor(type: 'min' | 'max' = 'min') {
        super();
        this.#type = type;
    }

    /**
     * Insert an element into the heap.
     * Time complexity: O(log n)
     * @param {T} item - the element to be inserted
     * @returns {void}
     */
    insert(item: T): void {
        throw new Error('Method not implemented.');
    }

    /**
     * Removes and returns the element at the top of the heap.
     * This operation re-establishes the heap property.
     * Time complexity: O(log n)
     */
    extract() {
        throw new Error('Method not implemented.');
    }

    /**
     * Returns the element at the top of the heap without removing it.
     * Time complexity: O(1)
     * @returns {T | undefined}
     */
    peek() {
        return this.#heap[0];
    }
}
