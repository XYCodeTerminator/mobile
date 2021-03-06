// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

import Button from './Button';
import ButtonTitle from './ButtonTitle';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +onPress: () => void,
  +style?: StylePropType,
|};

export default function CloseButton({ onPress, style }: Props) {
  return (
    <Button onPress={onPress} style={[styles.button, style]}>
      <ButtonTitle
        style={styles.text}
        text={<Translation id="shared.button.close" />}
      />
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
