import React, {Component} from 'react';
import './palette.css'
import './App.css';
import NotePanel from './NotePanel/NotePanel.jsx';
import MentionsPanel from './MentionsPanel/MentionsPanel.jsx';

class App extends Component {
  render() {
    return (<div className="row">
      <div className="left">
        <NotePanel></NotePanel>
      </div>
      <div className="right">
        <MentionsPanel></MentionsPanel>
      </div>
    </div>);
  }
}

export default App;
