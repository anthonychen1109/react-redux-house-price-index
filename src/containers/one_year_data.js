import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

//ACTIONS
import { fetchOneYr } from '../actions';

class HouseChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stateName: ''
    };
    this.renderData = this.renderData.bind(this)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.stateName.length === 2) {
      this.props.fetchOneYr(this.state.stateName)
    } else {
      alert('Please Enter A Valid State Abbreviation')
    }
    this.setState({ stateName: '' })
  }

  onInputChange = (event) => {
    this.setState({ stateName: event.target.value })
  }

  renderData(stateName) {
    const name = stateName.dataset.name
    const start = stateName.dataset.start_date
    const end = stateName.dataset.end_date
    const dataset_code = stateName.dataset.dataset_code
    const value = stateName.dataset.data.map(data => data[1]).join()
    const formattedValue = value.split(',').join('\n')
    const reversedData = value.split(',').reverse()

    return (
      <div key={dataset_code}>
        <h3 className="head text-center">{name} from {start} to {end}</h3>
        <div className="row">
          <div className="prices col-2">
            <h5>Value</h5>
            {formattedValue}
          </div>
          <div className="graph col-10 text-center">
            <Chart data={reversedData} color='black' />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div>
          <h4 className='text-center'>1 Year Data Selected:</h4>
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
          {this.props.OneYear.map(this.renderData)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ HPI, SixMonth, OneYear }){
  return {
    HPI,
    SixMonth,
    OneYear
  }
}

export default connect(mapStateToProps, { fetchOneYr })(HouseChart);