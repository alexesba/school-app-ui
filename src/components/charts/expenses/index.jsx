import React from 'react';
import BarChart from '../../graph';
import PropTypes from 'prop-types';
import { formatNumber } from '../../../utils/index';

const barChartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    backgroundColor: ['#40dfcd', '#417dfc', '#ffaa01'],
    data: [125000, 100000, 75000, 50000, 150000],
    label: 'Expenses (millions)'
  }, ]
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000
  },
  scales: {

    xAxes: [{
      display: false,
      maxBarThickness: 100,
      ticks: {
        display: false,
        padding: 0,
        fontColor: '#646464',
        fontSize: 14,
      },
      gridLines: {
        display: true,
        color: '#e1e1e1',
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        display: true,
        autoSkip: false,
        fontColor: '#646464',
        fontSize: 14,
        stepSize: 25000,
        padding: 20,
        beginAtZero: true,
        callback: function (value) {
          var ranges = [{
            divider: 1e6,
            suffix: 'M'
          },
            {
              divider: 1e3,
              suffix: 'k'
            }
          ];

          return formatNumber(ranges, value);
        }
      },
      gridLines: {
        display: true,
        drawBorder: true,
        color: '#e1e1e1',
        zeroLineColor: '#e1e1e1'

      }
    }]
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: true
  },
  elements: {}
};


class ExpensesChart extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultTypes = {
    title: 'Expenses'
  };
  render() {
    return (
      <div className='card dashboard-card-two pd-b-20'>
        <div className='card-body'>
          <div className='heading-layout1'>
            <div className='item-title'>
              <h3>Expenses</h3>
            </div>
            <div className='dropdown'>
              <a className='dropdown-toggle' href='#' role='button' data-toggle='dropdown'
                aria-expanded='false'>...</a>

              <div className='dropdown-menu dropdown-menu-right'>
                <a className='dropdown-item' href='#'><i
                    className='fas fa-times text-orange-red'></i>Close</a>
                <a className='dropdown-item' href='#'><i
                    className='fas fa-cogs text-dark-pastel-green'></i>Edit</a>
                <a className='dropdown-item' href='#'><i
                    className='fas fa-redo-alt text-orange-peel'></i>Refresh</a>
              </div>
            </div>
          </div>
          <div className='expense-report'>
            <div className='monthly-expense pseudo-bg-Aquamarine'>
              <div className='expense-date'>Jan 2019</div>
              <div className='expense-amount'><span>$</span> 15,000</div>
            </div>
            <div className='monthly-expense pseudo-bg-blue'>
              <div className='expense-date'>Feb 2019</div>
              <div className='expense-amount'><span>$</span> 10,000</div>
            </div>
            <div className='monthly-expense pseudo-bg-yellow'>
              <div className='expense-date'>Mar 2019</div>
              <div className='expense-amount'><span>$</span> 8,000</div>
            </div>
          </div>
          <BarChart data={barChartData} type='bar' options={barChartOptions}/>
        </div>
      </div>
    )
  }
}

export default React.memo(ExpensesChart);
