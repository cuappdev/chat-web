import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { HomePage } from './components';
import reducer from './redux/reducer';

class App extends React.Component {
  store = createStore(reducer);

  render() {
    return (
      <Provider store={this.store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
