import React from 'react';

export default class DeleteBtn extends React.Component {
  render() {
    return(
      <button 
        onClick={() => this.props.handleDelete(this.props.id)}
        className='btn-danger'>
          Delete
      </button>
    )
  }
}