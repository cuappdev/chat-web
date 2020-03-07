import React from 'react';

import './styles.scss';

const SideBar: React.FunctionComponent = () => (
  <div className="menu-container">
    <div className="app-name">patch</div>
    <div className="section-text">Bug Reports</div>
    <div className="section-text selected-section">Customer Service</div>
    <div className="section-text">Feature Requests</div>
  </div>
);

export default SideBar;
