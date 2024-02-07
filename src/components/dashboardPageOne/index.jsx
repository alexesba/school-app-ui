import React from 'react';
import PropTypes from 'prop-types';

const DashboardPageOne = ({children}) => (
  <div className="dashboard-page-one">
    { children }
  </div>
);

DashboardPageOne.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default React.memo(DashboardPageOne);
