import { Component } from 'react';

class NodeGetter extends Component {
  state = { node: null };
  setRef = node => this.setState({ node });
  rerender = () => this.forceUpdate();
  render() {
    const { node } = this.state;
    return this.props.children({
      refCallback: this.setRef,
      node,
      rerender: this.rerender,
    });
  }
}

export default NodeGetter;
