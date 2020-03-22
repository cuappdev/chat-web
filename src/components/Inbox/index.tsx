import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Divider, IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { StylesProvider } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { DispatchProps } from '../dispatchProps';
import { InboxItem } from '../../models';
import { AppAction } from '../../redux/actionTypes';
import { AppState } from '../../redux/reducer';
import './styles.scss';

interface InboxProps extends DispatchProps {
  unresolvedItems: InboxItem[]
  resolvedItems: InboxItem[]
}

interface InboxState {
  unresolvedOpen: boolean,
  resolvedOpen: boolean,
}

enum InboxSection {
  Unresolved = 'Unresolved',
  Resolved = 'Resolved',
}

class Inbox extends React.Component<InboxProps, InboxState> {
  constructor(props: any) {
    super(props);
    this.state = {
      unresolvedOpen: true,
      resolvedOpen: true,
    };
  }

  handleClick = (sectionName: string) => {
    if (sectionName === InboxSection.Unresolved) {
      this.setState((state) => ({
        unresolvedOpen: !state.unresolvedOpen,
        resolvedOpen: state.resolvedOpen,
      }));
    } else {
      this.setState((state) => ({
        unresolvedOpen: state.unresolvedOpen,
        resolvedOpen: !state.resolvedOpen,
      }));
    }
  };

  render() {
    const { resolvedItems, unresolvedItems } = this.props;
    const { resolvedOpen, unresolvedOpen } = this.state;

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
                  onClick={() => this.handleClick(InboxSection.Unresolved)}
                >
                  {unresolvedOpen ? (
                    <ArrowDropDownIcon
                      classes={{ root: 'section-header-button-icon' }}
                    />
                  ) : (
                    <ArrowDropUpIcon
                      classes={{ root: 'section-header-button-icon' }}
                    />
                  )}
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
                  onClick={() => this.handleClick(InboxSection.Resolved)}
                >
                  {resolvedOpen ? (
                    <ArrowDropDownIcon
                      classes={{ root: 'section-header-button-icon' }}
                    />
                  ) : (
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
  }
}


const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
