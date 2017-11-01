import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//COMPONENTS
import App from './app';
import Header from './header';
import Footer from './footer';
import Directory from './directory';
import NotFound from './not_found';

//CONTAINERS
import SixMonthData from '../containers/six_month_data';
import OneYearData from '../containers/one_year_data';
import FiveYearData from '../containers/five_year_data';

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Directory />
        <Switch>
          <Route path='/6mo' component={SixMonthData} />
          <Route path='/1yr' component={OneYearData} />
          <Route path='/5yr' component={FiveYearData} />
          <Route exact path='/' component={App} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Home;