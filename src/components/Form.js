import React from 'react';

class FormGroup extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label>
          {this.props.label}: 
          <input className='form-control' type='text' />
        </label>
      </div>
    )
  }
}

export default class AddBookForm extends React.Component {
  render() {
    const formStyle = {visibility: this.props.formVisibility}
    return(
      <form className='bookForm' style={formStyle}>

        <div className='form-group'>
          <button onClick={this.props.closeFormClick} className='close'>X</button>
        </div>

        <FormGroup label='Title' />
        <FormGroup label='Author' />
        <FormGroup label='Published' />
        <FormGroup label='Pages' />
        
        <div className='form-group'>
          <label>
            Have you read this book?
            <div className='form-check'>
              <input className='form-check-input' type='radio' value='true' />
              <label>Yes</label>
            </div>
            <div className='form-check'>
                <input className='form-check-input' type='radio' value='false' />
              <label>No</label>
            </div>
          </label>
        </div>

        <div>
          <button className='btn btn-info submit'>Add</button>
        </div>
      
      </form>
    )
  }
}