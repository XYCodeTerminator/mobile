// @flow

import { NativeModules } from 'react-native';

const LoggingModule = {
  ANCILLARY_STEP_DETAILS: '',
  ANCILLARY_STEP_PAYMENT: '',
  ANCILLARY_STEP_RESULTS: '',
  ANCILLARY_STEP_SEARCH_FORM: '',
  ANCILLARY_PROVIDER_BOOKINGCOM: '',
  ANCILLARY_PROVIDER_STAY22: '',
}; //NativeModules.RNLoggingModule;

const {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
  ANCILLARY_PROVIDER_BOOKINGCOM,
  ANCILLARY_PROVIDER_STAY22,
} = LoggingModule;

const Type = {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
};

const Provider = {
  ANCILLARY_PROVIDER_BOOKINGCOM,
  ANCILLARY_PROVIDER_STAY22,
};

type LogType = $Keys<typeof Type>;
type LogProvider = $Keys<typeof Provider>;

function ancillaryDisplayed(type: LogType, provider: LogProvider) {
  console.log(type, provider);
}

function ancillaryPurchased(type: LogType, provider: LogProvider) {
  console.log(type, provider);
}

export default {
  Type,
  Provider,
  ancillaryDisplayed,
  ancillaryPurchased,
};
