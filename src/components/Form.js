import React from 'react';

class FormGroup extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label>
          {this.props.label}: 
          <input 
            onChange={this.props.onChange}
            name={this.props.name} 
            className='form-control' 
            type='text'
            value={this.props.value}
          />
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

        <FormGroup onChange={this.props.handleFormChange} name='title' label='Title' value={this.props.title}/>
        <FormGroup onChange={this.props.handleFormChange} name='author' label='Author' value={this.props.author}/>
        <FormGroup onChange={this.props.handleFormChange} name='published' label='Published' value={this.props.published}/>
        <FormGroup onChange={this.props.handleFormChange} name='pages' label='Pages' value={this.props.pages}/>
        
        <div onChange={this.props.handleFormChange} className='form-group'>
          <label>
            Have you read this book?
            <div className='form-check'>
              <input name='read' className='form-check-input' type='radio' value={true} />
              <label>Yes</label>
            </div>
            <div className='form-check'>
                <input name='read' className='form-check-input' type='radio' value={false} />
              <label>No</label>
            </div>
          </label>
        </div>

        <div>
          <button onClick={this.props.addBook} className='btn btn-info submit'>Add</button>
        </div>
      
      </form>
    )
  }
}