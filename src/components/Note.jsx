import React, { Component } from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default class Note extends Component {
  render() {
    return (
      <div className='note'>
        <span>{this.props.text}</span>
            
        <div className='note-footer'>
            <MdDeleteForever 
                 className='delete-icon' 
                 size='1.3em'
                 onClick={() => this.props.onDelete(this.props.id)}
                 />
                <small>{this.props.date}</small>
        </div>
        
      </div>
    )
  }
}
