import React from "react";
import AddBtn from "./AddBook";
import Table from "./Table";
import Form from "./Form";
import store from '../data-persistance/localStorage'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibility: "hidden",
      addBtnVisibility: "visible",
      title: '',
      author: '',
      published: '',
      pages: '',
      read: true,
      books: store.getBooks(),
    };
    this.handleAddBookClicked = this.handleAddBookClicked.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleReadStatus = this.handleReadStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddBookClicked() {
    this.setState({ formVisibility: "visible", addBtnVisibility: "hidden" });
  }
  handleCloseForm(e) {
    e.preventDefault();
    this.setState({ formVisibility: "hidden", addBtnVisibility: "visible" });
  }
  handleFormChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author,
      published: this.state.published,
      pages: this.state.pages,
      read: this.state.read
    }
    store.addBook(book)
    this.setState({
      title: '',
      author: '',
      published: '',
      pages: '',
      read: true,
      books: store.getBooks(),
      formVisibility: "hidden",
      addBtnVisibility: "visible"
    })
  }
  //work in progress
  handleReadStatus(book) {
    store.updateBook(book);
    this.setState({books: store.getBooks()})
  }
  handleDelete(id) {
    store.deleteBook(id);
    this.setState({books: store.getBooks()})
  }


  render() {
    return (
      <div>
        <h1>myLibrary</h1>
        <h3>Add books that you've read or intend to read:</h3>
        <Table 
          handleReadStatus={this.handleReadStatus} 
          bookList={this.state.books}
          handleDelete={this.handleDelete}  
        />
        <AddBtn
          handleClick={this.handleAddBookClicked}
          addBtnVisibility={this.state.addBtnVisibility}
        />
        <Form
          formVisibility={this.state.formVisibility}
          closeFormClick={this.handleCloseForm}
          handleFormChange={this.handleFormChange}
          addBook={this.handleFormSubmit}
        />
      </div>
    );
  }
}
