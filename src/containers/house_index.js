import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

    HouseIndex.propTypes = {
      stateName: PropTypes.string.isRequired
    }
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
            placeholder="Get House Price Index Of A State"
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
            null
          }
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchData })(HouseIndex);