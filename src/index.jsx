import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/dashboard.scss'
// import $ from 'jquery';
import './scripts/Chart.min.js';
import './scripts/datepicker.min.js';
import './scripts/jquery.counterup.min.js';
import './scripts/plugins.js';
import './scripts/jquery.scrollUp.min.js';



import App from "./App";
const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
