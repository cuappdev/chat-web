import React from 'react';

import Inbox from '../Inbox';
import { InboxItem } from '../../models/index';
import SideBar from '../SideBar';
import './styles.scss';

const dummyShortItem: InboxItem = {
  title: 'Button not working',
  message: 'The popular times button does nothing',
};

const dummyLongItem: InboxItem = {
  title: 'Really really really really really really reaalllllly long',
  message: 'asdfaskjfdhflkajghajwehrafbjdknsfhqguefhabjdknhluky2gevbf',
};

const dummyItems: InboxItem[] = [dummyShortItem, dummyLongItem, dummyShortItem,
  dummyShortItem, dummyLongItem, dummyLongItem];

const HomePage: React.FunctionComponent = () => (
  <div className="container">
    <SideBar />
    <Inbox unresolvedItems={dummyItems} resolvedItems={dummyItems} />
  </div>
);

export default HomePage;
