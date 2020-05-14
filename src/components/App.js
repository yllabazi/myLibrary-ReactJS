import React from 'react';
import AddBtn from './AddButton';
import Table from './Table';
import Form from './Form';

const bookList = [
  {
    title: 'Power of Habit',
    author: 'Charles Duhigg',
    published: 2012,
    pages: 330,
    read: true
  },
  {
    title: 'Muslimani Ideal',
    author: 'Filan Fisteku',
    published: 2222,
    pages: 111,
    read: true
  }
];
localStorage.setItem('Books', JSON.stringify(bookList));

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>myLibrary</h1>
        <h3>Add books that you've read or intend to read:</h3>
        <Table />
        <AddBtn />
        <Form />
      </div>
    )
  }
}