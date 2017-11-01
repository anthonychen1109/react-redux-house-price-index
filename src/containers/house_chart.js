import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

//CONTAINERS
import HouseData from './house_data';

class HouseChart extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderData = this.renderData.bind(this)
  }

  renderData(stateName) {
    const name = stateName.dataset.name
    const start = stateName.dataset.start_date
    const end = stateName.dataset.end_date
    const dataset_code = stateName.dataset.dataset_code
    const value = stateName.dataset.data.map(data => data[1]).join()
    const reversedData = value.split(',').reverse()

    return (
      <div key={dataset_code}>
        <h3 className="head text-center">{name} from {start} to {end}</h3>
        <Chart data={reversedData} color='black' />
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.props.HPI.map(this.renderData)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ HPI, SixMonth }){
  return {
    HPI,
    SixMonth
  }
}

export default connect(mapStateToProps, null)(HouseChart);