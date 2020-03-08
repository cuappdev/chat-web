import React from 'react';

import Inbox from '../Inbox';
import SideBar from '../SideBar';

const HomePage: React.FunctionComponent = () => (
  <div className="container">
    <SideBar />
    <Inbox />
  </div>
);

export default HomePage;
