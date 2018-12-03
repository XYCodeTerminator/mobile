// @flow strict

import { NativeModules } from 'react-native';

// const {
//   getLanguage: nativeGetLanguage,
//   getTerritory: nativeGetTerritory,
//   getLocaleUnderscored: nativeGetLocaleUnderscored,
//   getLocaleDashed: nativeGetLocaleDashed,
// } = NativeModules.RNDeviceInfo;

export const getLanguage = () => 'en'; //nativeGetLanguage;
export const getTerritory = () => 'en'; //nativeGetTerritory;
export const getLocaleUnderscored = () => 'en'; // nativeGetLocaleUnderscored;
export const getLocaleDashed = () => 'en'; //nativeGetLocaleDashed;

export default {
  getLanguage,
  getTerritory,
  getLocaleUnderscored,
  getLocaleDashed,
};
