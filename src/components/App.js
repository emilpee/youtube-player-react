import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    input: 'abc'
  };
  render() {
    return (
      <div className="app">
        <SearchBar />
      </div>
    )
  }
}

export default App;
