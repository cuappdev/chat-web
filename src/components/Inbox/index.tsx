import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { connect } from 'react-redux';
import { Checkbox, Divider, IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { StylesProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';

import { DispatchProps } from 'components/dispatchProps';
import { InboxItem } from 'models';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import './styles.scss';

export interface InboxComponentProps extends DispatchProps {
  unresolvedItems: InboxItem[]
  resolvedItems: InboxItem[]
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

  const handleClick = (sectionName: string) => {
    if (sectionName === InboxSection.Unresolved) {
      setUnresolvedOpen(!unresolvedOpen);
    } else {
      setResolvedOpen(!resolvedOpen);
    }
  };

  return (
    <StylesProvider injectFirst>
      <div className="inbox-container">
        <header>Inbox</header>
        <input type="text" placeholder="Search" />
        <List
          component="nav"
          aria-label="unresolved"
          subheader={(
            <ListSubheader classes={{ root: 'section-header' }} disableGutters disableSticky>
              <IconButton
                classes={{ root: 'section-header-button' }}
                disableRipple
                onClick={() => handleClick(InboxSection.Unresolved)}
              >
                {
                  unresolvedOpen
                    ? (
                      <ArrowDropDownIcon
                        classes={{ root: 'section-header-button-icon' }}
                      />
                    )
                    : (
                      <ArrowDropUpIcon
                        classes={{ root: 'section-header-button-icon' }}
                      />
                    )
                }
              </IconButton>
              {InboxSection.Unresolved}
            </ListSubheader>
          )}
        >
          <Divider classes={{ root: 'divider' }} />
          <Collapse in={unresolvedOpen} timeout="auto" unmountOnExit>
            {unresolvedItems.map((item) => (
              <ListItem button classes={{ root: 'list-item', selected: 'list-item-focused' }} disableRipple>
                <ListItemIcon classes={{ root: 'icon' }}>
                  <Checkbox
                    classes={{
                      root: 'checkbox',
                      checked: 'checkbox-checked',
                      colorSecondary: 'checkbox-checked',
                    }}
                    size="small"
                    disableRipple
                    color="default"
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    root: 'text',
                    primary: 'primary-text',
                    secondary: 'secondary-text',
                  }}
                  primary={item.title}
                  secondary={item.message}
                />
              </ListItem>
            ))}
          </Collapse>
        </List>
        <List
          component="nav"
          aria-label="resolved"
          subheader={(
            <ListSubheader classes={{ root: 'section-header' }} disableGutters disableSticky>
              <IconButton
                classes={{ root: 'section-header-button' }}
                disableRipple
                onClick={() => handleClick(InboxSection.Resolved)}
              >
                {resolvedOpen
                  ? (
                    <ArrowDropDownIcon
                      classes={{ root: 'section-header-button-icon' }}
                    />
                  )
                  : (
                    <ArrowDropUpIcon
                      classes={{ root: 'section-header-button-icon' }}
                    />
                  )}
              </IconButton>
              {InboxSection.Resolved}
            </ListSubheader>
          )}
        >
          <Divider classes={{ root: 'divider' }} />
          <Collapse in={resolvedOpen} timeout="auto" unmountOnExit>
            {resolvedItems.map((item) => (
              <ListItem button classes={{ root: 'list-item', selected: 'list-item-focused' }} disableRipple>
                <ListItemIcon classes={{ root: 'icon' }}>
                  <Checkbox
                    classes={{
                      root: 'checkbox',
                      checked: 'checkbox-checked',
                      colorSecondary: 'checkbox-checked',
                    }}
                    size="small"
                    disableRipple
                    color="default"
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    root: 'text',
                    primary: 'primary-text',
                    secondary: 'secondary-text',
                  }}
                  primary={item.title}
                  secondary={item.message}
                />
              </ListItem>
            ))}
          </Collapse>
        </List>
      </div>
    </StylesProvider>
  );
};

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const Inbox = connect(mapStateToProps, mapDispatchToProps)(InboxComponent);
