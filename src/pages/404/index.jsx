import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ props }) => (
  <div>
    <p> Not found </p>
    <Link to="/"> Go back</Link>
  </div>
);

export default NotFound;
