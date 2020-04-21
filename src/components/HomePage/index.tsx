import Grid from '@material-ui/core/Grid';
import { Inbox, SideBar } from 'components';
import { InboxItem } from 'models';
import React from 'react';

const dummyShortItem: InboxItem = {
  title: 'Button not working',
  message: 'The popular times button does nothing',
};

const dummyLongItem: InboxItem = {
  title: 'Really really really really really really reaalllllly long',
  message: 'asdfaskjfdhflkajghajwehrafbjdknsfhqguefhabjdknhluky2gevbf',
};

const dummyItems: InboxItem[] = [
  dummyShortItem,
  dummyLongItem,
  dummyShortItem,
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
