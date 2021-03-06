/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightServices$ref = any;
type Header$ref = any;
type MissingInformation$ref = any;
type PassengerMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +databaseId: ?number,
  +authToken: ?string,
  +isPastBooking: ?boolean,
  +$fragmentRefs: Header$ref & PassengerMenuGroup$ref & MissingInformation$ref & FlightServices$ref,
  +$refType: MainMenu$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MainMenu",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PassengerMenuGroup",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MissingInformation",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FlightServices",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '53fb5a48e57d6ee59d4b56f348746d19';
module.exports = node;
