import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

//COMPONENTS
import App from './app';
import Header from './header';

//CONTAINERS
import SixMonthData from '../containers/six_month_data';

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route path='/6mo' component={SixMonthData} />
      </div>
    </BrowserRouter>
  )
}

export default Home;