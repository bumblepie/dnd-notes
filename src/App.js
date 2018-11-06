import React from 'react';
import './palette.css';
import './App.css';
import NotePanel from './NotePanel/NotePanel';
import MentionsPanel from './MentionsPanel/MentionsPanel';

const App = () => (
  <div className="row">
    <div className="left">
      <NotePanel />
    </div>
    <div className="right">
      <MentionsPanel />
    </div>
  </div>
);

export default App;
