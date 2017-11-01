import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

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
    const formattedValue = value.split(',').join('\n')
    console.log(formattedValue)
    const reversedData = value.split(',').reverse()

    return (
      <div key={dataset_code}>
        <h3 className="head text-center">{name} from {start} to {end}</h3>
        <Chart data={reversedData} color='black' />
        <li>{formattedValue}</li>
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