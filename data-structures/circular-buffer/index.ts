/**
 * Circular Buffer class with basic functionality.
 * Circular Buffer (or Ring Buffer) is a data structure which uses fixed-length FIFO buffer.
 * If next item overflowed a buffer, the oldest one is dropped.
 *
 * @example
 * const linksBuffer = new CircularBuffer(3);
 *
 * linksBuffer.list(); // []
 * linksBuffer.push('URL 1');
 * linksBuffer.push('URL 2');
 * linksBuffer.push('URL 3');
 * linksBuffer.list(); // ['URL 1', 'URL 2', 'URL 3']
 * [...linksBuffer]; // ['URL 1', 'URL 2', 'URL 3'] => buffer is iterable
 * linksBuffer.push('URL 4');
 * linksBuffer.list(); // ['URL 2', 'URL 3', 'URL 4'] => oldest entry dropped
 */


class CircularBuffer {
    #data;
    #size;

    constructor (size: number) {
        this.#data = [];
        this.#size = size;
    }

    push (value) {
        if (value != undefined) {
            if (this.#data.length === this.#size) {
                this.#data.shift();
            }

            this.#data.push(value);
        }
    }

    list () {
        return this.#data;
    }

    *[Symbol.iterator]() {
        for (let i = 0, data = this.#data; i < data.length; yield data[i], ++i);
    }
}
