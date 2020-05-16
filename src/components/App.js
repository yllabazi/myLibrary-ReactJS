import React from 'react';
import AddBtn from './AddBook';
import Table from './Table';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibility: 'hidden',
      addBtnVisibility: 'visible',
    }
    this.handleAddBookClicked = this.handleAddBookClicked.bind(this);
  }
  
  handleAddBookClicked() {
    this.setState({formVisibility: 'visible', addBtnVisibility: 'hidden'})
  }
  
  render() {
    return(
      <div>
        <h1>myLibrary</h1>
        <h3>Add books that you've read or intend to read:</h3>
        <Table />
        <AddBtn 
          handleClick={this.handleAddBookClicked} 
          addBtnVisibility={this.state.addBtnVisibility} 
        />
        <Form formVisibility={this.state.formVisibility} />
      </div>
    )
  }
}