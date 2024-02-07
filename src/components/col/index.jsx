import React from 'react';
import PropTypes from 'prop-types';

const COLS = {
  3: 'col-12 col-xl-4 col-3-xxxl',
  4: 'col-12 col-xl-6 col-4-xxxl',
  6: 'col-12 col-xl-8 col-6-xxxl',
}

const colClass = (size) => COLS[size]
const Col = ({size, children}) =>
  <div className={colClass(size) }>
  {children}
</div>

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  size: PropTypes.number.isRequired
}
export default Col;
