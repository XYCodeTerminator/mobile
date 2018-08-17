// @flow

import * as React from 'react';

import Color from './Color';
import StyleSheet from './PlatformStyleSheet';
import Icon from './icons/Icon';

type Props = {|
  size?: number,
  color?: string,
|};

const createStyles = (size: number) =>
  StyleSheet.create({
    icon: {
      ios: {
        position: 'absolute',
        left: -size / 2,
        top: -size,
      },
      android: {},
    },
  });

/**
 * This drop marker is always pointing to the (0,0) coordinate. It's because
 * the marker itself is always absolutely shifted to the left-top corner as
 * shown on the following picture:
 *
 *  .-.
 *  \O/
 *   v
 *   .-------.
 *   |       |
 *   |   x   |
 *   |       |
 *   `-------`
 */
export default function DropMarker({ size = 50, color }: Props) {
  const styles = createStyles(size);
  return (
    <Icon
      name="place"
      size={size}
      color={color || Color.brand}
      style={styles.icon}
    />
  );
}
