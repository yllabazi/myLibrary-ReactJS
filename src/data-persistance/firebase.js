import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1PqseE9umXJ9UpVSA749DDc0e9HBXx9c",
  authDomain: "mylibrary-aff2f.firebaseapp.com",
  databaseURL: "https://mylibrary-aff2f.firebaseio.com",
  projectId: "mylibrary-aff2f",
  storageBucket: "mylibrary-aff2f.appspot.com",
  messagingSenderId: "39131130010",
  appId: "1:39131130010:web:e7c343dc7f402e93b09723",
  measurementId: "G-T22LTTM10P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default class Storage {
  //get all books
  static getBooks(component = '') {
    let books = [];
    db.collection("Books")
      .orderBy('addedAt', 'asc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const book = {
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            published: doc.data().published,
            pages: doc.data().pages,
            read: doc.data().read,
          };
          books.push(book);
          if (component !== '') {
            component.setState({ books: books });
          }
        });
      })
      return books;
  }
  //add a book
  static addBook(book) {
    const time = {addedAt: firebase.firestore.FieldValue.serverTimestamp()}
    const b = {...book, ...time}
    db.collection('Books').doc().set(b)
    .then(() => {
      console.log('Book added successfuly.');
    })
  }

  //delete a book
  static deleteBook(book) {
    db.collection('Books').doc(book).delete().then(() => {
      console.log('Book deleted successfuly.');
    })
  }

  //toggle read status on a book
  static updateBook(book, value) {
    let read = value === true ? false : true;
    
    console.log(`Read status was ${value}, now changed to ${read}`)
    
    db.collection('Books').doc(book).update({
      read: read,
    }).then(() => {
      // console.log('Read status updated successfully.');
    })
  }
}