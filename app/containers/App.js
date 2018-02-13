// @flow
import * as React from 'react';
import HeaderLinks from '../components/HeaderLinks';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <HeaderLinks />
        {this.props.children}
      </div>
    );
  }
}
