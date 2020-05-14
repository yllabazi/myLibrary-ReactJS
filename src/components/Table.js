import React from 'react';
import store from '../data-persistance/localStorage';


class Table extends React.Component {
  render() {
    const bookList = store.getBooks();
    const books = bookList.map((book) => {
      const {title, author, published, pages, read} = book
      return (
        <tr key={title}>
          <td>{title}</td>
          <td>{author}</td>
          <td>{published}</td>
          <td>{pages}</td>
          <td>{read ? '✔' :'✗'}</td>
        </tr>
      )
    });
    return (
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Author</th>
            <th scope='col'>Published</th>
            <th scope='col'>Pages</th>
            <th scope='col'>Read?</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    )
  }
}

export default Table;