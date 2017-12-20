import React, { Component } from 'react';
import { Div } from 'glamorous';

class ThemeChooser extends Component {
  static darkTheme = { name: 'dark', colors: { background: 'gray', font: 'white' } };
  static lightTheme = {
    name: 'light',
    colors: { background: '#EEE', font: '#333' },
  };
  state = { theme: ThemeChooser.lightTheme };
  setLightTheme = () => this.setState({ theme: ThemeChooser.lightTheme });
  setDarkTheme = () => this.setState({ theme: ThemeChooser.darkTheme });
  render() {
    const { theme } = this.state;
    return (
      <Div
        width="100%"
        textAlign="center"
        height="100%"
        display="flex"
        flexDirection="column"
        paddingTop={10}
      >
        <Div fontSize={12} marginBottom={20} display="flex" flexDirection="column">
          <label>
            <input
              type="radio"
              name="theme"
              checked={theme === ThemeChooser.lightTheme}
              onChange={this.setLightTheme}
            />
            {ThemeChooser.lightTheme.name}
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              checked={theme === ThemeChooser.darkTheme}
              onChange={this.setDarkTheme}
            />
            {ThemeChooser.darkTheme.name}
          </label>
        </Div>
        <Div flex="1">{this.props.children({ theme })}</Div>
      </Div>
    );
  }
}

export default ThemeChooser;
