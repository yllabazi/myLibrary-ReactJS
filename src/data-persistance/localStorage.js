export default class Storage {
  //get all books
  static getBooks() {
    let books = JSON.parse(localStorage.getItem('Books'));
    console.log(books);
    return books;
  }

  //add book
  static addBook(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('Books', JSON.stringify(books));
  }

  //update book's read status
  static updateBook(book) {
    const books = this.getBooks();
    books.forEach((element) => {
      if (element.title === book) {
        element.read = !element.read;
      }
    });
    localStorage.setItem('Books', JSON.stringify(books));
  }

  //delete book
  static deleteBook(book) {
    const books = this.getBooks();
    books.forEach((element) => {
      if (element.title === book) {
        books.splice(books.indexOf(element), 1);
      }
    });
    localStorage.setItem('Books', JSON.stringify(books));
  }
}