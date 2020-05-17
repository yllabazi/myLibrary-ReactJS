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
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      published: '',
      pages: '',
      read: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const formStyle = {visibility: this.props.formVisibility}
    return(
      <form className='bookForm' style={formStyle}>

        <div className='form-group'>
          <button onClick={this.props.closeFormClick} className='close'>X</button>
        </div>

        <FormGroup onChange={this.handleChange} name='title' label='Title' value={this.state.title}/>
        <FormGroup onChange={this.handleChange} name='author' label='Author' value={this.state.author}/>
        <FormGroup onChange={this.handleChange} name='published' label='Published' value={this.state.published}/>
        <FormGroup onChange={this.handleChange} name='pages' label='Pages' value={this.state.pages}/>
        
        <div onChange={this.handleChange} className='form-group'>
          <label>
            Have you read this book?
            <div className='form-check'>
              <input name='read' className='form-check-input' type='radio' value='true' />
              <label>Yes</label>
            </div>
            <div className='form-check'>
                <input name='read' className='form-check-input' type='radio' value='false' />
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