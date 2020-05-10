import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { HomePage, Onboarding } from './views';

class App extends React.Component {
  store = createStore(reducer);

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Switch>
            <Route path="/">
              <Onboarding />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
