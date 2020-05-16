import React from 'react';

class AddBtn extends React.Component {
  render() {
    const btnStyle = {visibility: this.props.addBtnVisibility}
    return (
      <button 
        onClick={this.props.handleClick} 
        className='btn-info' 
        style={btnStyle}
      >
        Add Book
      </button>
    )
  }
}

export default AddBtn;