import React from 'react';

import SideBar from '../SideBar';
import Inbox from '../Inbox';

const HomePage: React.FunctionComponent = () => (
  <div className="container">
    <SideBar />
    <Inbox />
  </div>
);

export default HomePage;
