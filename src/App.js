import React from 'react'
import NoteContainer from './components/NoteContainer';
import Header from './components/Header'

class  App extends React.Component {


  render(){
      return (
      <div className="App">
        <Header/>
        <NoteContainer/>
      </div>
  )
  }
}

export default App;