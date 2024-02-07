import React from 'react';
import PropTypes from 'prop-types';

const GroupItem = ({ groupName, children, icon}) => (
  <li className='nav-item sidebar-nav-item'>
    <a href='#' className='nav-link'><i className={`flaticon-${icon}`}></i><span>{groupName}</span></a>
    <ul className='nav sub-group-menu'>
      {children}
    </ul>
  </li>
);

GroupItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  groupName: PropTypes.string.isRequired,
}
export default GroupItem;
