import React from 'react';
import { Checkbox, Divider, IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { StylesProvider } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import './styles.scss';

export interface InboxItem {
  title: string;
  message: string;
}

const dummyShortItem: InboxItem = {
  title: 'Button not working',
  message: 'The popular times button does nothing',
};

const dummyLongItem: InboxItem = {
  title: 'Really really really really really really reaalllllly long',
  message: 'asdfaskjfdhflkajghajwehrafbjdknsfhqguefhabjdknhluky2gevbf',
};

const dummyItems: InboxItem[] = [dummyShortItem, dummyLongItem, dummyShortItem, dummyShortItem];

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
        {dummyItems.map((item) => (
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
              primary={item.title}
              secondary={item.message}
            />
          </ListItem>
        ))}
      </List>
    </div>
  </StylesProvider>
);

export default Inbox;
