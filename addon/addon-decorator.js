import React from 'react';
import { ThemeProvider } from 'glamorous';
import addons from '@storybook/addons';

import { EVENT_ID } from './register';

let channel;

class ThemeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.initTheme,
    };
  }
  componentDidMount() {
    channel = addons.getChannel();
    channel.on(EVENT_ID, this.onChannel);
  }
  onChannel = data => {
    this.setState({
      theme: data,
    });
    console.log(data);
  };
  render() {
    return <ThemeProvider theme={this.state.theme}>{this.props.story}</ThemeProvider>;
  }
}

export function gTheme(theme) {
  return storyFn => <ThemeContainer story={storyFn()} initTheme={theme} />;
}
