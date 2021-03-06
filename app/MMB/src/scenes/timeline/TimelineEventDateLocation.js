// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TimelineEventDateLocationContext from '../../context/TimelineEventDateLocationContext';
import { TextWithIsPastEventContext } from '../../context/TimelineEventContext';

type Props = {|
  +time: string,
  +place?: string,
  +flight?: string,
|};

export default function TimelineEventDateLocation(props: Props) {
  let destination;
  if (props.place) {
    destination = (
      <TextWithContext>
        <Translation
          id="mmb.booking_timeline.event.in_destination"
          values={{ place: props.place }}
        />
      </TextWithContext>
    );
  }
  if (props.flight) {
    destination = (
      <TextWithContext>
        <Translation passThrough={props.flight} />
      </TextWithContext>
    );
  }

  return (
    <View style={styles.container}>
      <TextWithContext>
        <Translation passThrough={props.time} />
      </TextWithContext>
      {destination}
    </View>
  );
}

const TextWithContext = ({ children }) => (
  <TimelineEventDateLocationContext.Consumer>
    {({ highlightText }) => (
      <TextWithIsPastEventContext
        style={[styles.text, highlightText && styles.highlightText]}
      >
        {children}
      </TextWithIsPastEventContext>
    )}
  </TimelineEventDateLocationContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: defaultTokens.colorTextSecondary,
  },
  highlightText: {
    color: defaultTokens.paletteRedNormal,
  },
});
