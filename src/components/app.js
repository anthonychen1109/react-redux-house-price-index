import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Main from '../containers/main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
