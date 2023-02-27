import React, { Component } from 'react'

export default class CreateNote extends Component {
    state = {
        noteText : '',
        characterLimit : 200,
  }

    handleChange = (e) => {
    if(this.state.characterLimit - e.target.value.length >=0){
      this.setState({noteText: e.target.value});
    }
    }

    handleSaveText =() => {
    if(this.state.noteText.trim().length > 0){
      this.props.onAddNote(this.state.noteText)
      this.setState({noteText: ''});
    }
  }


  render() {
    return (
        <div className='note add-new'>
        <textarea 
            rows='8'
            cols='10'
            placeholder='Type in your new note here'
            value={this.state.noteText}
            onChange={this.handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>{this.state.characterLimit - this.state.noteText.length}  remaining</small>
            <button className='save' onClick={this.handleSaveText}>Save</button>
        </div>
    </div>
    )
  }
}
