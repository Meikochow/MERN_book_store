import React, { Component } from 'react';
import '../style/App.scss';
import Nav from '../containers/Nav';
import View from '../containers/View';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav/>
          <View/>
          <footer>Built with <span role="img">📚</span> and <span role="img">🌮</span> by <a href="www.victorcojocaru93.com" target="_blank" rel="noopener noreferrer">Victor Cojocaru</a> 2019</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
