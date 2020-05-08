import { Grid as MUIGrid } from '@material-ui/core';
import { styled as muiStyled } from '@material-ui/core/styles';
import { Inbox, SideBar, TopBar } from 'components';
import { InboxItem } from 'models';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

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
    <Grid container>
      <Grid item xs={3}>
        <Header>patch</Header>
      </Grid>
      <Grid item xs={9}>
        <TopBar />
      </Grid>
      <NestedGridContainter container item xs={3}>
        <SideBar />
      </NestedGridContainter>
      <Grid item xs={3}>
        <Inbox unresolvedItems={dummyItems} resolvedItems={dummyItems} />
      </Grid>
    </Grid>
  );
};

const Grid = muiStyled(MUIGrid)({
  '&.MuiGrid-container': {
    display: 'flex',
    height: '100vh',
  },
});

const NestedGridContainter = styled(MUIGrid)({
  '&.MuiGrid-container': {
    display: 'flex',
    height: '90vh',
  },
});

const Header = styled.header`
  height: 10vh;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 16px;
  background-color: ${theme.colors.backgroundWash};
  font-family: Roboto;
  font-size: 24px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.darkGrey};
  border-right-style: solid;
  border-right-color: ${theme.colors.mediumGrey};
  border-right-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.mediumGrey};
  border-bottom-width: 1px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
`;
