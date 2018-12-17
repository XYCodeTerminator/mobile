// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  Button,
  ButtonTitle,
  Logger,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Translation } from '@kiwicom/mobile-localization';

import convertRooms from './convertRooms';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from '../HotelDetailScreenContext';

type Props = {
  +selected: {
    [string]: number,
  },
  +navigation: NavigationType,
  +currency: string,
  +hotelId: ?string,
  +getGuestCount: () => number,
  +numberOfRooms: number,
  +price: {|
    +amount: number,
    +currency: string,
  |},
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const { hotelId, getGuestCount, numberOfRooms, price } = this.props;
    Logger.hotelsBookNowPressed(
      hotelId || '',
      numberOfRooms,
      getGuestCount(),
      price.amount,
      `${price.currency} ${price.amount}`,
    );
    if (hotelId != null) {
      this.props.navigation.navigate('Payment', {
        hotelId,
        rooms: convertRooms(this.props.selected),
        language: DeviceInfo.getLanguage(),
      });
    }
  };

  render() {
    return (
      <Button onPress={this.handleGoToPayment} testID="bookNowButton">
        <ButtonTitle
          text={<Translation id="single_hotel.book_now" />}
          style={styles.text}
        />
      </Button>
    );
  }
}

const select = ({ currency, hotelId, getGuestCount }: HotelsContextState) => ({
  currency,
  hotelId,
  getGuestCount,
});
const selectHotelDetailScreen = ({
  selected,
  numberOfRooms,
  price,
}: HotelDetailScreenState) => ({
  selected,
  numberOfRooms,
  price,
});

export default withHotelDetailScreenContext(selectHotelDetailScreen)(
  withHotelsContext(select)(withNavigation(BookNow)),
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.paletteWhite,
  },
});
