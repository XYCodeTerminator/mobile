// @flow

import { NativeModules } from 'react-native';

export const formatAmount = (
  price: number,
  toCurrency: string,
): Promise<Number> => {
  return new Promise(resolve => resolve(`${price}${toCurrency}`)); //NativeModules.RNCurrencyManager.formatAmount(price, toCurrency);
};
