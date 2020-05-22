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
  Typography,
} from '@material-ui/core';
import { styled as muiStyled } from '@material-ui/core/styles';
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
    <Box height="90vh" display="flex" flexDirection="column" overflow="auto">
      <SearchContainer display="flex" alignItems="center">
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
  );
};

const Checkbox = muiStyled(MUICheckbox)({
  height: '14.4px',
  width: '14.4px',
  minWidth: '14.4px',
  color: `${theme.colors.mediumGrey}`,
  padding: '0px',
  alignSelf: 'flex-start',
  paddingRight: '12.5px',
  paddingTop: '4px',
  '&.Mui-checked': {
    color: `${theme.colors.black}`,
  },
  '&:hover,&.Mui-checked:hover ': {
    backgroundColor: `${theme.colors.transparent}`,
  },
});

const Box = muiStyled(MUIBox)({
  borderRightStyle: 'solid',
  borderRightColor: `${theme.colors.mediumGrey}`,
  borderRightWidth: '1px',
});

const Divider = muiStyled(MUIDivider)({
  height: '1px',
  color: `${theme.colors.mediumGrey}`,
});

const InboxItemContainer = muiStyled(ListItem)({
  padding: '13.5px 17.5px 14.9px 17.5px',
  borderBottomStyle: 'solid',
  borderBottomColor: `${theme.colors.mediumGrey}`,
  borderBottomWidth: '1px',
  '&.Mui-selected, &.Mui-selected:hover': {
    '& .MuiCheckbox-root': {
      color: `${theme.colors.darkGrey}`,
      '&.Mui-checked': {
        color: `${theme.colors.black}`,
      },
    },
    backgroundColor: `${theme.colors.mediumGrey}`,
  },
  '&:hover': {
    backgroundColor: `${theme.colors.transparent}`,
  },
});

const InboxItemText = muiStyled(ListItemText)({
  margin: '0px',
  '& span': {
    // primary text
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: theme.fontWeights.medium,
    color: `${theme.colors.black}`,
    lineHeight: 'normal',
  },
  '& p': {
    // secondary text
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: `${theme.colors.darkGrey}`,
    lineHeight: 'normal',
    paddingTop: '7px',
  },
});

const InboxSectionHeader = muiStyled(ListSubheader)({
  display: 'inline-flex',
  fontFamily: 'Roboto',
  color: `${theme.colors.black}`,
  fontSize: '18px',
  lineHeight: 'normal',
  paddingTop: '26.8px',
  paddingBottom: '13px',
});

const SectionHeaderButton = muiStyled(IconButton)({
  padding: '0px 21px 0px 23px',
  width: '20px',
  height: '20px',
  '&:hover': {
    backgroundColor: `${theme.colors.transparent}`,
  },
});

const SearchBar = styled.input`
  width: 100%;
  background-color: ${theme.colors.backgroundWash};
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  outline: none;
  border: none;
`;

const SearchContainer = muiStyled(MUIBox)({
  minHeight: '31.5px',
  borderRadius: '4px',
  backgroundColor: `${theme.colors.backgroundWash}`,
  margin: '18px 18px 0px',
  paddingRight: '18px',
});

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
