import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTIONS
import { fetchData } from '../actions';

//CONTAINERS
import HouseChart from './house_chart';

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
    if(this.state.stateName.length === 2) {
      this.props.fetchData(this.state.stateName)
    } else {
      alert('Please Enter A Valid State Abbreviation')
    }
    this.setState({ stateName: '' })
  }

  onInputChange = (event) => {
    this.setState({ stateName: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <div>
          <h4 className='text-center'>Max Data Selected:</h4>
        </div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Get House Price Index Of A State"
            className="form-control search-bar"
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
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchData })(HouseIndex);