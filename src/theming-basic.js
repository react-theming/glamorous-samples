import React, { Component } from 'react';
import glamorous, { ThemeProvider } from 'glamorous';

// a themed <Title> component
const Title = glamorous.h1(({ theme }) => ({
  color: theme.main.color,
}));

// use <ThemeProvider> to pass theme down the tree
const Basic = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Title>Hello Basic!</Title>
  </ThemeProvider>
);

// it is possible to nest themes
// inner themes will be merged with outers
const Merging = ({ theme, secondaryTheme }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Title>Hello Outer Merging!</Title>
      <ThemeProvider theme={secondaryTheme}>
        {/* this will be blue */}
        <Title>Hello Inner Merging!</Title>
      </ThemeProvider>
    </div>
  </ThemeProvider>
);

// to override a theme, just pass a theme prop to a glamorous component
// the component will ignore any surrounding theme, applying the one passed directly via props
const PropOverride = ({ theme }) => (
  <ThemeProvider theme={theme}>
    {/* this will be green */}
    <Title theme={{ main: { color: 'green' } }}>Hello Override!</Title>
  </ThemeProvider>
);

export class ThemableApp extends Component {
  state = {
    // our main theme object:
    theme: { main: { color: 'red' } },
    // our secondary theme object:
    secondaryTheme: { main: { color: 'blue' } },
  };
  swapThemes = () => {
    this.setState(state => ({
      theme: state.secondaryTheme,
      secondaryTheme: state.theme,
    }));
    console.log('Themes was switched');
  };
  render() {
    const { theme, secondaryTheme } = this.state;
    return (
      <glamorous.Div maxWidth={600} margin="auto" fontSize={24} onClick={this.swapThemes}>
        <h1>Themeing in glamorous!</h1>
        <div>Click any text to swap the theme...</div>
        <Basic theme={theme} />
        <Merging theme={theme} secondaryTheme={secondaryTheme} />
        <PropOverride theme={theme} />
      </glamorous.Div>
    );
  }
}
