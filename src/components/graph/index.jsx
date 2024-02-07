import React from 'react';
import PropTypes from 'prop-types';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.lineChart = React.createRef();
    this.chart = undefined;
  }

  componentDidMount() {
    const { type, options, data } = this.props;

    const lineChartElement = this.lineChart.current.getContext('2d');
    setTimeout(() => {
      this.chart = new window.Chart(
        lineChartElement, {
          type,
          data,
          options,
        },
      );
    }, 400);
  }

  render() {
    const { className, width, height } = this.props;

    return (
      <div className={className}>
        <canvas ref={this.lineChart} width={width} height={height} />
      </div>
    );
  }
}

Graph.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
  height: PropTypes.number,
  options: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Graph.defaultProps = {
  className: 'earning-chart-wrap',
  width: 660,
  height: 330,
};


export default React.memo(Graph);
