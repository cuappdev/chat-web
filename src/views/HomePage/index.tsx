import { Grid } from '@material-ui/core';
import { InboxItem } from 'models';
import React from 'react';
import { Inbox, SideBar } from 'views';

const dummyShortItem: InboxItem = {
  title: 'Button not working',
  message: 'The popular times button does nothing',
};

const dummyLongItem: InboxItem = {
  title: 'Really really really really really really reaalllllly long',
  message: 'asdfaskjfdhflkajghajwehrafbjdknsfhqguefhabjdknhluky2gevbf',
};

const searchTargetItem: InboxItem = {
  title: 'special',
  message: 'super top secret message',
};

const dummyItems: InboxItem[] = [
  dummyShortItem,
  dummyLongItem,
  dummyShortItem,
  searchTargetItem,
  dummyShortItem,
  dummyLongItem,
  dummyLongItem,
];

export const HomePage: React.FunctionComponent = () => {
  return (
    <Grid container direction="row" alignItems="stretch">
      <SideBar />
      <Inbox unresolvedItems={dummyItems} resolvedItems={dummyItems} />
    </Grid>
  );
};
