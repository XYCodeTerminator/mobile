// @flow

/* eslint-disable no-restricted-imports  */
import * as React from 'react';
import Relay from 'react-relay';
import { Alert } from '@kiwicom/mobile-localization';

import PublicEnvironment from './src/PublicEnvironment';
import PrivateEnvironment from './src/PrivateEnvironment';
import ConnectionManager from './src/ConnectionManager';

export {
  graphql,
  createPaginationContainer,
  createRefetchContainer,
} from 'react-relay';
export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';
export { default as AuthContext, withAuthContext } from './src/AuthContext';

// just a very simple Flow types - doesn't work very well yet (better than nothing)
export const createFragmentContainer = (
  component: React.ComponentType<*>,
  fragmentSpec: Object,
): React.ComponentType<*> => {
  return Relay.createFragmentContainer(component, fragmentSpec);
};

export const commitMutation = (
  config: CommitMutationConfig,
  token?: string,
) => {
  if (ConnectionManager.isConnected() === false) {
    Alert.translatedAlert(null, { id: 'relay.query_renderer.no_connection' });
    config.onCompleted({ data: null }, 'No connection');
    return null;
  }
  if (token) {
    return Relay.commitMutation(
      PrivateEnvironment.getEnvironment(token),
      config,
    );
  }
  return Relay.commitMutation(PublicEnvironment.getEnvironment(), config);
};

// Flow types:

type CommitMutationConfig = {|
  // please extend this type if needed
  +mutation: string,
  +variables: Object,
  +onCompleted: Function,
  +updater?: Function,
|};

export type QueryRendererProps = {|
  +query: string,
  +render: (props: Object) => React.Node,
  +renderOfflineScreen?: ?(retry: () => void) => React.Node,
  +variables?: Object,
  +footer?: ?React.Node,
|};

export type RelayPaginationProp = {|
  +hasMore: () => boolean,
  +isLoading: () => boolean,
  +loadMore: (pageSize: number, callback?: (error: ?Error) => void) => void,
  +refetchConnection: (
    totalCount: number,
    callback?: (error: ?Error) => void,
    refetchVariables: ?any,
  ) => void,
|};

type RefetchOptions = {|
  +force: true, // we always have to force the refetch since we use offline cache (TODO: wrap it)
|};

type Disposable = {|
  +dispose: () => void,
|};

export type RelayRefetchProp = {|
  +refetch: (
    refetchVariables: Object | null | ((fragmentVariables: Object) => Object),
    renderVariables: ?Object,
    callback: ?(error: ?Error) => void,
    options: RefetchOptions,
  ) => Disposable,
|};
