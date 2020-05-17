import React from 'react';
import DeleteBtn from './DeleteBook';


class Table extends React.Component {
  render() {
    const bookList = this.props.bookList;
    const books = bookList.map((book) => {
      const {title, author, published, pages, read} = book
      return (
        <tr key={title}>
          <td>{title}</td>
          <td>{author}</td>
          <td>{published}</td>
          <td>{pages}</td>
          <td>{read ? '✔' :'✗'}</td>
          <td><DeleteBtn /></td>
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