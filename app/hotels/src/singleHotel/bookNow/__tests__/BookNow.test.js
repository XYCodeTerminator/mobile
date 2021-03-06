// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import { BookNow } from '../BookNow';

const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  state: {
    params: {},
  },
  addListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
};

it('renders without crashing', () => {
  const props = {
    onGoToPayment() {},
    selected: {
      a: 1,
    },
    availableRooms: [
      {
        originalId: 'a',
        incrementalPrice: [
          {
            amount: 100,
            currency: 'EUR',
          },
        ],
      },
    ],
    hotelId: 'abc',
    personCount: 2,
    numberOfRooms: 1,
    checkin: new Date(0),
    checkout: new Date(1),
    currency: 'EUR',
    navigation,
  };
  PlaygroundRenderer.render(<BookNow {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToPayment() {},
    selected: {},
    availableRooms: undefined,
    hotelId: undefined,
    personCount: 2,
    numberOfRooms: 1,
    checkin: new Date(0),
    checkout: new Date(1),
    currency: 'EUR',
    navigation,
  };

  PlaygroundRenderer.render(<BookNow {...props} />);
});
