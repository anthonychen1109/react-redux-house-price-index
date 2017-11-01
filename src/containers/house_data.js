import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//REDUCERS
import HPI from '../reducers';
import SixMonth from '../reducers';

//ACTIONS
import { fetchData, fetchSixMo } from '../actions';

//CONTAINERS
import HouseChart from './house_chart';

//COMPONENTS
import Chart from '../components/chart';

class HouseData extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
    this.handleSixMonths = this.handleSixMonths.bind(this);
  }

  handleSixMonths(props) {
    this.props.fetchSixMo(this.props.stateAbbv)
  }


  render() {
    return (
      <div className="container">
        <div className="text-center">
          <Link to='/6mo'>
            <button className="btn btn-secondary" onClick={this.handleSixMonths}>6M</button>
          </Link>
            <button className="btn btn-secondary">1Y</button>
          <button className="btn btn-secondary">5Y</button>
          <button className="btn btn-secondary">MAX</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ HPI, SixMonth }) {
  return { HPI, SixMonth }
}

export default connect(mapStateToProps, { fetchData, fetchSixMo })(HouseData);