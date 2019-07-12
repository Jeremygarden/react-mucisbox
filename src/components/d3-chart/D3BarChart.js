import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

class D3PieChart extends React.Component {
  render() {
    return (
      <div className="pie-chart">
        <svg ref={r => (this.chartRef = r)} />
      </div>
    )
  }
}
D3PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default D3PieChart
