import React from 'react';
import PropTypes from 'prop-types';
import DoughnutChart from '../../graph';

const doughnutChartData = {
  labels: ['Female Students', 'Male Students'],
  datasets: [{
    backgroundColor: ['#304ffe', '#ffa601'],
    data: [45000, 105000],
    label: 'Total Students'
  }, ]
};

const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 65,
  rotation: -9.4,
  animation: {
    duration: 2000
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: true
  },
};

class StudentsChart extends React.Component {
  render() {
    return(
      <div className="card dashboard-card-three pd-b-20">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Students</h3>
            </div>
            <div className="dropdown">
              <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                aria-expanded="false">...</a>

              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i
                    className="fas fa-times text-orange-red"></i>Close</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
              </div>
            </div>
          </div>
          <DoughnutChart
            className='doughnut-chart-wrap'
            data={doughnutChartData}
            type='doughnut'
            options={doughnutChartOptions}
            width={100}
            heigh={300}
          />
          <div className="student-report">
            <div className="student-count pseudo-bg-blue">
              <h4 className="item-title">Female Students</h4>
              <div className="item-number">45,000</div>
            </div>
            <div className="student-count pseudo-bg-yellow">
              <h4 className="item-title">Male Students</h4>
              <div className="item-number">1,05,000</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default React.memo(StudentsChart);
