import React from 'react';
import Header from './Header';
import MainContent from '../containers/MainContent';

const App = () => (
  <div className="app">
    <Header title="App Title, suckas!" />
    <MainContent />
  </div>
);

export default App;
