const pagination = {
  currentPage: 0, //starts at 0 by default
  prevPage: function () {
    if (this.currentPage === 0) {
      this.currentPage = this.itemsLength; //if we are on the first page(currentPage = 0) got to last page
      return pagination;
    } else {
      this.currentPage--;
      return pagination;
    }
  },
  nextPage: function () {
    if (this.currentPage === this.itemsLength) {
      this.currentPage = 0; // if on the last page set currentPage to 0
      return pagination;
    } else {
      this.currentPage++;
      return pagination;
    }
  },
  lastPage: function () {
    this.currentPage = this.itemsLength;
  },
  init: function (items, perPage) {
    this.items = items;
    this.perPage = perPage;
    this.itemsLength = Math.floor(items.length / perPage); // creates a prop for page count
    const separatePages = [];
    for (let i = 0; i < this.items.length; i = i + this.perPage) {
      separatePages.push(this.items.slice(i, i + this.perPage));
    }
    this.separatePages = separatePages; // creates an array with every single page items for us to call
  },
  getPageItems: function () {
    return this.separatePages[this.currentPage];
  },
  firstPage: function () {
    this.currentPage = 0;
  }
};

const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
pagination.init(alphabetArr, 4);
console.log(pagination.separatePages);
