/**
 * datastructures-js/linked-list
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */

const { LinkedListNode } = require('./linkedListNode');

/*
 * @class
 */
class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  /**
   * Adds a node at the beginning of the list.
   * @public
   * @param {any} value
   * @returns {LinkedListNode}
   */
  insertFirst(value) {
    this._head = new LinkedListNode(value, this._head);
    this._count += 1;
    return this._head;
  }

  /**
   * Adds a node at the end of the list.
   * @public
   * @param {any} value
   * @param {LinkedListNode} [startingNode]
   * @returns {LinkedListNode}
   */
  insertLast(value, startingNode) {
    // TODO: Implement this function
  }

  /**
   * Adds a node at a specific position.
   * @public
   * @param {number} position
   * @param {any} value
   * @returns {LinkedListNode}
   */
  insertAt(position, value) {
    // TODO: Implement this function
  }

  /**
   * Removes the head node.
   * @public
   * @returns {LinkedListNode}
   */
  removeFirst() {
    // TODO: Implement this function
  }

  /**
   * Removes the last node in the list.
   * @public
   * @returns {LinkedListNode}
   */
  removeLast() {
    // TODO: Implement this function
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} cb
   * @returns {number} number of removed nodes
   */
  removeEach(cb) {
    // TODO: Implement this function
  }

  /**
   * Removes a node at a specific position.
   * @public
   * @param {number} position
   * @returns {LinkedListNode}
   */
  removeAt(position) {
    // TODO: Implement this function
  }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(cb) {
    // TODO: Implement this function
  }

  /**
   * Finds one node in the list based on a callback.
   * @public
   * @param {function} cb
   * @param {DoublyLinkedListNode} [startingNode]
   * @returns {LinkedListNode}
   */
  find(cb, startingNode = this._head) {
    // TODO: Implement this function
  }

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} cb - callback should return true for required nodes.
   * @returns {LinkedList}
   */
  filter(cb) {
    // TODO: Implement this function
  }

  /**
   * Returns the head node.
   * @public
   * @returns {LinkedListNode}
   */
  head() {
    return this._head;
  }

  /**
   * Returns the nodes count in the list.
   * @public
   * @returns {number}
   */
  count() {
    return this._count;
  }

  /**
   * Converts the linked list into an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * Checks if the list is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._head === null;
  }

  /**
   * Clears the list
   * @public
   */
  clear() {
    this._head = null;
    this._count = 0;
  }

  /**
   * Creates a linked list from an array
   * @public
   * @static
   * @param {array} values
   * @return {LinkedList}
   */
  static fromArray(values) {
    if (!Array.isArray(values)) {
      throw new Error('cannot create LinkedList from none-array values');
    }

    const linkedList = new LinkedList();
    let lastInserted = null;
    values.forEach((value) => {
      lastInserted = linkedList.insertLast(value, lastInserted);
    });
    return linkedList;
  }
}

exports.LinkedList = LinkedList;
