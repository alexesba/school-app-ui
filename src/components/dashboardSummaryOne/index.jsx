import React from 'react';
import PropTypes from 'prop-types';
import Col from '../col';

class DashboardSummaryOne extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    textColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { number, title, iconClass, backgroundColor } = this.props;
    return (
      <Col size={3}>
        <div className="dashboard-summery-one mg-b-20">
          <div className="row align-items-center">
            <div className="col-6">
              <div className={`item-icon bg-light-${backgroundColor}`}>
                <i className={`flaticon-${iconClass} text-{textColor}`}></i>
              </div>
            </div>
            <div className="col-6">
              <div className="item-content">
                <div className="item-title">{title}</div>
                <div className="item-number">
                  <span className="counter" data-num={number}>
                    {number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default React.memo(DashboardSummaryOne);
