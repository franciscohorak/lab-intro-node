class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length++
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let result = this.items.reduce((a, b) =>
        a + b
      )
      return result;
    }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      let result = this.sum() / this.length;
      return result;
    }
  }
}

module.exports = SortedList;