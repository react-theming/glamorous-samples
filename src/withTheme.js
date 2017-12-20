import React from 'react';
import glamorous, { ThemeProvider, withTheme } from 'glamorous';

// our main theme object
const baseTheme = {
  main: { color: 'red' },
};

// a themed <Title> component
const Title = glamorous.h1(({ props, theme }) => ({
  color: theme.main.color,
  backgroundColor: props ? 'black' : '',
}));

// normal component that takes a theme prop
const SubTitle = ({ children, theme: { main: { color } } }) => (
  <h3 style={{ color }}>{children}</h3>
);

// extended component with theme prop
const ThemedSubTitle = withTheme(SubTitle);

export const WithThemeApp = () => (
  <ThemeProvider theme={baseTheme}>
    <glamorous.Div>
      {<Title>Hello!</Title>}
      <ThemedSubTitle>from withTheme!</ThemedSubTitle>
    </glamorous.Div>
  </ThemeProvider>
);
