import {
  Box as MUIBox,
  Checkbox as MUICheckbox,
  Collapse,
  Divider as MUIDivider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  StylesProvider,
} from '@material-ui/core';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';
import { DispatchProps } from 'components/dispatchProps';
import { InboxItem } from 'models';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectInboxItem } from 'redux/actions';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export interface InboxComponentProps extends DispatchProps {
  unresolvedItems: InboxItem[];
  resolvedItems: InboxItem[];
  selectedItem?: InboxItem;
}

enum InboxSection {
  Unresolved = 'Unresolved',
  Resolved = 'Resolved',
}

export const InboxComponent: React.FunctionComponent<InboxComponentProps> = ({
  dispatch,
  selectedItem,
  resolvedItems,
  unresolvedItems,
}) => {
  const [unresolvedOpen, setUnresolvedOpen] = useState(true);
  const [resolvedOpen, setResolvedOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const arrowIcon = (open: boolean) => {
    return open ? (
      <ArrowDropDown style={{ fill: theme.colors.black }} />
    ) : (
      <ArrowRight style={{ fill: theme.colors.black }} />
    );
  };

  const handleClick = (sectionName: string) => {
    if (sectionName === InboxSection.Unresolved) {
      setUnresolvedOpen(!unresolvedOpen);
    } else {
      setResolvedOpen(!resolvedOpen);
    }
  };

  const itemToggled = (item?: InboxItem) => {
    dispatch(selectInboxItem(item));
  };

  const checked = (e: any) => {
    e.stopPropagation();
  };

  const getInboxItemComponent = (item: InboxItem, index: number) => {
    const selected = item === selectedItem;
    const select = () => itemToggled(item);
    const deselect = () => itemToggled(undefined);

    return selected ? (
      <InboxItemContainer
        button
        disableRipple
        selected
        onClick={deselect}
        key={index}
      >
        <Checkbox size="small" disableRipple onClick={checked} />
        <InboxItemText primary={item.title} secondary={item.message} />
      </InboxItemContainer>
    ) : (
      <InboxItemContainer button disableRipple onClick={select} key={index}>
        <Checkbox size="small" disableRipple onClick={checked} />
        <InboxItemText primary={item.title} secondary={item.message} />
      </InboxItemContainer>
    );
  };

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = (items: InboxItem[]) => {
    if (searchQuery) {
      return items.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.message.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    } else {
      return items;
    }
  };

  return (
    <StylesProvider injectFirst>
      <Box>
        <SearchContainer>
          <SearchIcon src={require('../../images/search-icon.png')} />
          <SearchBar type="text" placeholder="Search" onChange={handleSearch} />
        </SearchContainer>
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
            {filteredItems(unresolvedItems).map((item, index) =>
              getInboxItemComponent(item, index),
            )}
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
            {filteredItems(resolvedItems).map((item, index) =>
              getInboxItemComponent(item, index),
            )}
          </Collapse>
        </List>
      </Box>
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

const Box = styled(MUIBox)`
  height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-right-color: ${theme.colors.mediumGrey};
  border-right-width: 1px;
`;

const Divider = styled(MUIDivider)`
  color: ${theme.colors.mediumGrey};
  height: 1px;
`;

const InboxItemContainer = styled(ListItem)`
  padding: 13.5px 17.5px 14.9px 17.5px;
  border-bottom: 1px;
  border-bottom-color: ${theme.colors.mediumGrey};
  border-bottom-style: solid;
  &.Mui-selected, &.Mui-selected:hover {
    ${Checkbox} {
      color: ${theme.colors.darkGrey};
      &.Mui-checked {
        color: ${theme.colors.black};
      }
    };
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
  width: 100%;
  background-color: ${theme.colors.backgroundWash};
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  outline: none;
  border: none;
`;

const SearchContainer = styled(MUIBox)`
  display: flex;
  align-items: center;
  min-height: 31.5px;
  border-radius: 4px;
  background-color: ${theme.colors.backgroundWash};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  margin: 18px 18px 0px;
  padding-right: 18px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 15.3px;
  padding: 8px 18px;
`;

const mapStateToProps = (state: AppState) => ({
  selectedItem: state.selectedItem,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const Inbox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InboxComponent);
