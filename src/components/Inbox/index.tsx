import {
  Checkbox as MUICheckbox,
  Divider as MUIDivider,
  Grid,
  IconButton,
} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { StylesProvider } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { DispatchProps } from 'components/dispatchProps';
import { InboxItem } from 'models';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export interface InboxComponentProps extends DispatchProps {
  unresolvedItems: InboxItem[];
  resolvedItems: InboxItem[];
}

enum InboxSection {
  Unresolved = 'Unresolved',
  Resolved = 'Resolved',
}

export const InboxComponent: React.FunctionComponent<InboxComponentProps> = ({
  resolvedItems,
  unresolvedItems,
}) => {
  const [unresolvedOpen, setUnresolvedOpen] = useState(true);
  const [resolvedOpen, setResolvedOpen] = useState(true);

  const arrowIcon = (open: boolean) => {
    return open ? (
      <ArrowDropDownIcon style={{ fill: theme.colors.black }} />
    ) : (
      <ArrowDropUpIcon style={{ fill: theme.colors.black }} />
    );
  };

  const handleClick = (sectionName: string) => {
    if (sectionName === InboxSection.Unresolved) {
      setUnresolvedOpen(!unresolvedOpen);
    } else {
      setResolvedOpen(!resolvedOpen);
    }
  };

  return (
    <StylesProvider injectFirst>
      <Container direction="column">
        <InboxHeader>Inbox</InboxHeader>
        <SearchBar type="text" placeholder="Search" />
        <List
          component="nav"
          aria-label="unresolved"
          subheader={
            <InboxSectionHeader disableGutters disableSticky>
              <SectionHeaderButton
                disableRipple
                onClick={() => handleClick(InboxSection.Unresolved)}
              >
                {arrowIcon(unresolvedOpen)}
              </SectionHeaderButton>
              {InboxSection.Unresolved}
            </InboxSectionHeader>
          }
        >
          <Divider />
          <Collapse in={unresolvedOpen} timeout="auto" unmountOnExit>
            {unresolvedItems.map((item) => (
              <InboxItemContainer button disableRipple>
                <Checkbox size="small" disableRipple />
                <InboxItemText primary={item.title} secondary={item.message} />
              </InboxItemContainer>
            ))}
          </Collapse>
        </List>
        <List
          component="nav"
          aria-label="resolved"
          subheader={
            <InboxSectionHeader disableGutters disableSticky>
              <SectionHeaderButton
                disableRipple
                onClick={() => handleClick(InboxSection.Resolved)}
              >
                {arrowIcon(resolvedOpen)}
              </SectionHeaderButton>
              {InboxSection.Resolved}
            </InboxSectionHeader>
          }
        >
          <Divider />
          <Collapse in={resolvedOpen} timeout="auto" unmountOnExit>
            {resolvedItems.map((item) => (
              <InboxItemContainer button disableRipple>
                <Checkbox size="small" disableRipple />
                <InboxItemText primary={item.title} secondary={item.message} />
              </InboxItemContainer>
            ))}
          </Collapse>
        </List>
      </Container>
    </StylesProvider>
  );
};

const Checkbox = styled(MUICheckbox)`
  height: 14.4px;
  width: 14.4px;
  color: ${theme.colors.mediumGrey};
  padding: 0px;
  align-self: flex-start;
  min-width: 14.4px;
  padding-right: 12.5px;
  padding-top: 4px;
  &.Mui-checked {
    color: ${theme.colors.black};
  }
  &:hover,
  &.Mui-checked:hover {
    background-color: ${theme.colors.transparent};
  }
`;

const Container = styled(Grid)`
  overflow: auto;
  height: 100vh;
  max-height: 100vh;
  width: 387.3px;
  border-right-style: solid;
  border-right-color: ${theme.colors.mediumGrey};
  border-right-width: 1px;
`;

const Divider = styled(MUIDivider)`
  color: ${theme.colors.mediumGrey};
  height: 1px;
`;

const InboxHeader = styled.header`
  display: flex;
  min-height: 50.5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  font-size: 18px;
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.black};
  align-items: center;
  padding-left: 32px;
  margin-right: 1px;
  background-color: ${theme.colors.white};
`;

const InboxItemContainer = styled(ListItem)`
  padding: 13.5px 17.5px 14.9px 17.5px;
  border-bottom: 1px;
  border-bottom-color: ${theme.colors.mediumGrey};
  border-bottom-style: solid;
  &.Mui-selected, &.Mui-selected:hover {
    background-color: ${theme.colors.mediumGrey};
  },
  &:hover {
    background-color: ${theme.colors.transparent};
  },
`;

const InboxItemText = styled(ListItemText)`
  margin: 0px;
  .MuiListItemText-primary {
    display: block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.black};
    line-height: normal;
  }
  .MuiListItemText-secondary {
    font-family: 'Roboto';
    font-size: 12px;
    display: block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${theme.colors.darkGrey};
    line-height: normal;
    padding-top: 7px;
  }
`;

const InboxSectionHeader = styled(ListSubheader)`
  display: inline-flex;
  font-family: Roboto;
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  line-height: normal;
  padding-top: 26.8px;
  padding-bottom: 13px;
`;

const SectionHeaderButton = styled(IconButton)`
  padding: 0px 21px 0px 23px;
  width: 20px;
  height: 20px;
  &:hover {
    background-color: ${theme.colors.transparent};
  },
 `;

const SearchBar = styled.input`
  width: 351.3px;
  min-height: 31.5px;
  border-radius: 4px;
  background-color: ${theme.colors.backgroundWash};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  text-indent: 50.8px;
  margin: 0 auto;
  margin-top: 18px;
  outline: none;
  border: none;
  display: flex;
`;

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const Inbox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InboxComponent);
