// @flow

import { NativeModules } from 'react-native';

export const translate = (key: string): Promise<string> => {
  return new Promise(resolve => resolve(null)); //NativeModules.RNTranslationManager.translate(key);
};
