import React from 'react';

import { Inbox, SideBar } from 'components';
import { InboxItem } from '../../models';

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

export const HomePage: React.FunctionComponent = () => (
  <div className="container">
    <SideBar />
    <Inbox unresolvedItems={dummyItems} resolvedItems={dummyItems} />
  </div>
);
