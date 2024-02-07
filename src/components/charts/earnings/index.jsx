import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../../utils/index';
import DropDownMenuRight from '../../dropdownMenuRight';
import LineChart from '../../graph';

const lineChartData = {
  labels: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
  datasets: [{
    data: [0, 5e4, 1e4, 5e4, 14e3, 7e4, 5e4, 75e3, 5e4],
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    borderWidth: 1,
    pointRadius: 0,
    pointBackgroundColor: '#ff0000',
    pointBorderColor: '#ffffff',
    pointHoverRadius: 6,
    pointHoverBorderWidth: 3,
    fill: 'origin',
    label: 'Total Collection'
  },
    {
      data: [0, 3e4, 2e4, 6e4, 7e4, 5e4, 5e4, 9e4, 8e4],
      backgroundColor: '#417dfc',
      borderColor: '#417dfc',
      borderWidth: 1,
      pointRadius: 0,
      pointBackgroundColor: '#304ffe',
      pointBorderColor: '#ffffff',
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      fill: 'origin',
      label: 'Fees Collection'
    }
  ]
};
const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000
  },
  scales: {

    xAxes: [{
      display: true,
      ticks: {
        display: true,
        fontColor: '#222222',
        fontSize: 16,
        padding: 20
      },
      gridLines: {
        display: true,
        drawBorder: true,
        color: '#cccccc',
        borderDash: [5, 5]
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        display: true,
        autoSkip: true,
        maxRotation: 0,
        fontColor: '#646464',
        fontSize: 16,
        stepSize: 25000,
        padding: 20,
        callback: function (value) {
          const ranges = [{
            divider: 1e6,
            suffix: 'M'
          },
            {
              divider: 1e3,
              suffix: 'k'
            }
          ];

          function formatNumber(n) {
            for (let i = 0; i < ranges.length; i++) {
              if (n >= ranges[i].divider) {
                return (n / ranges[i].divider).toString() + ranges[i].suffix;
              }
            }
            return n;
          }
          return formatNumber(value);
        }
      },
      gridLines: {
        display: true,
        drawBorder: false,
        color: '#cccccc',
        borderDash: [5, 5],
        zeroLineBorderDash: [5, 5],
      }
    }]
  },
  legend: {
    display: false
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    enabled: true
  },
  elements: {
    line: {
      tension: .35
    },
    point: {
      pointStyle: 'circle'
    }
  }
};

class Earnings extends React.Component {
  static propTypes = {
    feesCollection: PropTypes.number,
    totalCollections: PropTypes.number,
  }

  static defaultProps = {
    totalCollections: 75000,
    feesCollection: 15000,
  }

  render() {
    const { totalCollections, feesCollection  } = this.props;

    return (
      <div className="card dashboard-card-one pd-b-20">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Earnings</h3>
            </div>
            <DropDownMenuRight/>
          </div>
          <div className="earning-report">
            <div className="item-content">
              <div className="single-item pseudo-bg-blue">
                <h4>Total Collections</h4>
                <span>{formatMoney(totalCollections)}</span>
              </div>
              <div className="single-item pseudo-bg-red">
                <h4>Fees Collection</h4>
                <span>{formatMoney(feesCollection)}</span>
              </div>
            </div>
            <div className="dropdown">
              <a className="date-dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                aria-expanded="false">Jan 20, 2019</a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Jan 20, 2019</a>
                <a className="dropdown-item" href="#">Jan 20, 2021</a>
                <a className="dropdown-item" href="#">Jan 20, 2020</a>
              </div>
            </div>
          </div>
          <LineChart data={lineChartData} type='line' options={lineChartOptions}/>
        </div>
      </div>
    )
  }
}

export default React.memo(Earnings);
