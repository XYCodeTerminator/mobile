// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';

import ServicesMenuGroup from './menuGroups/ServicesMenuGroup';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import Header from './components/header/Header';
import PassengerMenuGroup from './menuGroups/PassengerMenuGroup';

type Props = {|
  openMenu: string => void,
  bookingId: string,
|};

type State = {|
  activeId: string,
|};

export default class MainMenu extends React.Component<Props, State> {
  state = {
    activeId: 'mmb.main_menu.services.flight_services',
  };

  handleOpenSubmenu = (activeId: string, menuId: string) => {
    this.setState(
      {
        activeId,
      },
      () => this.props.openMenu(menuId),
    );
  };

  render = () => {
    const { activeId } = this.state;

    return (
      <ScrollView>
        <Header bookingId={this.props.bookingId} />
        <PassengerMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
        <ServicesMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
        <ManageMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
      </ScrollView>
    );
  };
}