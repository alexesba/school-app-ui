import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const MenuItem = ({
  path, title, icon, single,
}) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>
      <i
        className={
         classNames({
           'fa fa-angle-right': !single,
           [`flaticon-${icon}`]: single,
         })
        }
      />
      <span>{title}</span>
    </Link>
  </li>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  path: PropTypes.string,
  single: PropTypes.bool,
  title: PropTypes.string,
};

MenuItem.defaultProps = {
  single: false,
  title: 'Default Title',
  icon: '',
  path: '#',
};

export default MenuItem;
