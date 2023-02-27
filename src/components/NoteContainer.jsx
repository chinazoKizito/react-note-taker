import React, { Component } from 'react'
import { nanoid} from 'nanoid';
import Note from './Note';
import CreateNote from './CreateNote';

export default class NoteContainer extends Component {
    state = {
        notes: [],
    searchText : ''
}

  addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes =[...this.state.notes, newNote];
    this.setState({notes: newNotes});
  }

  deleteNote = (id) => {
   const newNotes = this.state.notes.filter((note) => note.id  !== id);
   this.setState({notes: newNotes});
 }



  render() {
    return (
        <div>
            <div className='notes-container'>
            {this.state.notes.map((note, index) => (
            <Note 
              key={index}
              text={note.text}
              id={note.id}
              date={note.date}
              onDelete={this.deleteNote}
            />
            ))}

            <CreateNote onAddNote={this.addNote}/>
        </div>
        </div>
            )
  }
}