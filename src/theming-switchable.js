import React from 'react';
import glamorous, { ThemeProvider } from 'glamorous';
import ThemeChooser from './theme-chooser';

const MyDiv = glamorous.div(
  {
    padding: '20px 0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.background,
  })
);

const Text = glamorous.span({ display: 'block' }, ({ theme }) => ({
  color: theme.colors.font,
}));

export const SwitchApp = (
  <ThemeChooser>
    {({ theme }) => (
      <ThemeProvider theme={theme}>
        <MyDiv>
          <Text>{theme.name}</Text>
          <ThemeProvider
            theme={{
              colors: { font: 'blue' },
            }}
          >
            <Text>nested</Text>
          </ThemeProvider>
          <Text theme={{ colors: { font: 'green' } }}>prop</Text>
        </MyDiv>
      </ThemeProvider>
    )}
  </ThemeChooser>
);
