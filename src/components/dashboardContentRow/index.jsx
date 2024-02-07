import React from 'react';
import PropTypes from 'prop-types';

const DashboardContentRow = ({ children }) => (
  <div className="row gutters-20">
    { children }
  </div>
);

DashboardContentRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(DashboardContentRow);
