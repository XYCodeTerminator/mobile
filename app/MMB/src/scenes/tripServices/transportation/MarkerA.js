// @flow

import * as React from 'react';

import TransportationMapMarker from './TransportationMapMarker';

type Props = {|
  +coordinate: ?{|
    +latitude: number,
    +longitude: number,
  |},
|};

export default function MarkerA({ coordinate }: Props) {
  return <TransportationMapMarker coordinate={coordinate} code="j" />;
}
