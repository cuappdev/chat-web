import React from 'react';

import Inbox from '../Inbox';
import SideBar from '../SideBar';
import './styles.scss';

const HomePage: React.FunctionComponent = () => (
  <div className="container">
    <SideBar />
    <Inbox />
  </div>
);

export default HomePage;
