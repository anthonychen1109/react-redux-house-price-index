import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

//ACTIONS
import { fetchData } from '../actions';

//CONTAINERS
import HouseChart from './house_chart';
import HouseData from './house_data';

class HouseIndex extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stateName: '',
      display: false
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchData(this.state.stateName)
    this.setState({ display: !this.state.display})
  }

  onInputChange = (event) => {
    this.setState({ stateName: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Enter a state abbreviation"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.stateName}
          />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-secondary"
              >
              Submit
            </button>
          </span>
        </form>
        <div>
          <HouseChart />
          {this.state.display ?
            <HouseData stateAbbv={this.state.stateName}/>
            :
            <div className="description">
              <br />
              <h4>A House Price Index (HPI) is a tool that measures changes in single-family home prices across a designated market. These tools can show you areas where home values are increasing or decreasing so you can estimate prices</h4>
              <hr />
              <br />
              <h4>A House Price Index (HPI) measures the price changes of residential housing. Methodologies commonly used to calculate HPI are the hedonic regression (HR), simple moving average (SMA) and repeat-sales regression (RSR)</h4>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchData })(HouseIndex);