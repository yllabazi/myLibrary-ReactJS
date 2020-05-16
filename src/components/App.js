import React from 'react';
import AddBtn from './AddButton';
import Table from './Table';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
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