import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Checkbox, Divider, IconButton } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './styles.scss';

const Inbox: React.FunctionComponent = () => (
  <StylesProvider injectFirst>
    <div className="inbox-container">
      <header>Inbox</header>
      <input type="text" placeholder="Search" />
      <List
        component="nav"
        aria-label="unresolved"
        subheader={(
          <ListSubheader classes={{ root: 'section-header' }} disableGutters>
            <IconButton
              classes={{ root: 'section-header-button' }}
              aria-label="dropdown"
              disableRipple
            >
              <ArrowDropDownIcon
                classes={{ root: 'section-header-button-icon' }}
              />
            </IconButton>
            Unresolved
          </ListSubheader>
        )}
      >
        <Divider classes={{ root: 'divider' }} />
        <ListItem button classes={{ root: 'list-item' }}>
          <ListItemIcon classes={{ root: 'icon' }}>
            <Checkbox
              classes={{
                root: 'checkbox',
                checked: 'checkbox-checked',
                colorSecondary: 'checkbox-checked',
              }}
              size="small"
              disableTouchRipple
              color="default"
            />
          </ListItemIcon>
          <ListItemText
            classes={{
              root: 'text',
              primary: 'primary-text',
              secondary: 'secondary-text',
            }}
            primary="Button not working"
            secondary="The popular times button does nothing"
          />
        </ListItem>
        <ListItem button classes={{ root: 'list-item', selected: 'list-item-focused' }}>
          <ListItemIcon classes={{ root: 'icon' }}>
            <Checkbox
              classes={{
                root: 'checkbox',
                checked: 'checkbox-checked',
                colorSecondary: 'checkbox-checked',
              }}
              size="small"
              disableTouchRipple
              color="default"
            />
          </ListItemIcon>
          <ListItemText
            classes={{
              root: 'text',
              primary: 'primary-text',
              secondary: 'secondary-text',
            }}
            primary="Really really really really really really reaalllllly long"
            secondary="asdfaskjfdhflkajghajwehrafbjdknsfhqguefhabjdknhluky2gevbf"
          />
        </ListItem>
      </List>
    </div>
  </StylesProvider>
);

export default Inbox;
