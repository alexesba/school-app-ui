import React from 'react';
import PropTypes from 'prop-types';

const ThreeDotsDropDownMenu = ({ children }) => (
  <div className="dropdown">
    <a
      href="#"
      className="dropdown-toggle"
      role="button"
      data-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="flaticon-more-button-of-three-dots" />
    </a>

    <div className="dropdown-menu dropdown-menu-right">
      {children}
    </div>
  </div>
);

ThreeDotsDropDownMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThreeDotsDropDownMenu;
