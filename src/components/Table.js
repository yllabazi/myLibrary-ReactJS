import React from 'react';
import DeleteBtn from './DeleteBook';

class TableRow extends React.Component {
  render() {
    return(
      <tr >
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.published}</td>
        <td>{this.props.pages}</td>
        <td style={{cursor: 'pointer'}} onClick={() => this.props.handleReadStatus(this.props.title)}>{this.props.read ? '✔' :'✗'}</td>
        <td><DeleteBtn handleDelete={this.props.handleDelete} id={this.props.title} /></td>
      </tr>
    )
  }
}


class Table extends React.Component {
  render() {
    const bookList = this.props.bookList;
    const rows = bookList.map((book) => {
      const {title, author, published, pages, read, id} = book
      return (
        <TableRow  
          key={id}
          title={title}
          author={author}
          published={published}
          pages={pages}
          read={read}
          handleReadStatus={this.props.handleReadStatus}
          handleDelete={this.props.handleDelete}
        />
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
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Table;