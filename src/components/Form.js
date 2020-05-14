import React from 'react';

export default class AddBookForm extends React.Component {
  render() {
    return(
      <form className='bookForm'>
        <div className='form-group'>
          <button className='close'>X</button>
        </div>
        <div className='form-group'>
          <label>
            Title: 
            <input className='form-control' type='text' />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Author: 
            <input className='form-control' type='text' />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Published: 
            <input className='form-control' type='text' />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Pages: 
            <input className='form-control' type='text' />
          </label>
        </div>
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