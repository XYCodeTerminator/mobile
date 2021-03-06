// @flow strict

import * as React from 'react';

import QueryRenderer from './QueryRenderer';
import type { QueryRendererProps } from '../index';
import AuthContext from './AuthContext';

type PropsWithContext = {|
  ...QueryRendererProps,
  +accessToken: string | null,
|};

export function PrivateApiRenderer(props: PropsWithContext) {
  if (props.accessToken === null) {
    // TODO: Return login
    return null;
  }

  return (
    <QueryRenderer
      query={props.query}
      variables={props.variables}
      render={props.render}
      accessToken={props.accessToken}
      renderOfflineScreen={props.renderOfflineScreen}
      footer={props.footer}
    />
  );
}

export default function PrivateApiRendererWithContext(
  props: QueryRendererProps,
) {
  return (
    <AuthContext.Consumer>
      {({ accessToken }) => (
        <PrivateApiRenderer {...props} accessToken={accessToken} />
      )}
    </AuthContext.Consumer>
  );
}
