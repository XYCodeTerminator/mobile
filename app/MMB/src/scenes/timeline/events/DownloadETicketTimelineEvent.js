// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, TextButton, TextIcon } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  type RouteNamesType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Title from '../MainContentTitle';
import type { DownloadETicketTimelineEvent as DownloadETicketTimelineEventType } from './__generated__/DownloadETicketTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: DownloadETicketTimelineEventType,
  +navigation: NavigationType,
|};

class DownloadETicketTimelineEvent extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  handleOpenETicket = () => {
    this.navigate('mmb.tickets.e_ticket', {
      ticketUrl: this.props.data.ticketUrl,
    });
  };

  render() {
    const { data } = this.props;
    const timestamp = data.timestamp;
    const ticketUrl = data.ticketUrl;
    const disabled = !ticketUrl;

    const buttonTitle = disabled ? (
      <Translation id="mmb.booking_timeline.event.download_eticket.button.title.not_available" />
    ) : (
      <Translation id="mmb.booking_timeline.event.download_eticket.button.title" />
    );

    return (
      <TimelineEvent
        timestamp={timestamp}
        displayTime={false}
        iconVertLines={<TimelineEventIcon icon={<TextIcon code="." />} />}
        mainContent={
          <View style={styles.container}>
            <Title>
              <Translation id="mmb.booking_timeline.event.download_eticket.title" />
            </Title>
            <View style={styles.button}>
              <TextButton
                disabled={disabled}
                title={buttonTitle}
                onPress={this.handleOpenETicket}
              />
            </View>
          </View>
        }
      />
    );
  }
}

export default createFragmentContainer(
  withNavigation(DownloadETicketTimelineEvent),
  graphql`
    fragment DownloadETicketTimelineEvent on DownloadETicketTimelineEvent {
      timestamp
      ticketUrl
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  button: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
});
