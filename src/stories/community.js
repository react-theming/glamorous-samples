import React from 'react';
import glamorous from 'glamorous';
import { storiesOf } from '@storybook/react';

import { AppCssGrid } from '../cssGrid';
import { StyleOverridesApp } from '../styleOverrides';
import { Footer, FooterHeader } from '../ComponentAsaSelector';

storiesOf('Community Examples', module)
  .addExample({
    title: 'CSS Grid',
    header: 'The best solution for CSS layout',
    description:
      "[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is a relatively new layout tool for the web. It's incredibly powerful and expressive and enables new layouts that were previously very difficult or altogether impossible.\n\n          In this example, we use the [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) feature of CSS to opt-into CSS Grid in browsers where this is available. Be warned that not all browsers will support @supports.",
    link: 'https://codesandbox.io/s/2k8yll8qj',
    file: 'src/cssGrid.js',
    showBox: false,
    story: <AppCssGrid />,
  })
  .addExample({
    title: 'Style overrides',
    header: 'Glamorous Style Overrides',
    description:
      "A handy way to accept style overrides in a component that's using glamorous and the ThemeProvider.",
    link: 'https://codesandbox.io/s/ERNVNoxEv',
    file: 'src/styleOverrides.js',
    showBox: false,
    story: <StyleOverridesApp />,
  })
  .addExample({
    title: 'Component as a selector',
    header: 'Glamorous Component',
    description: 'Component as a selector using nested selectors with glamorous.',
    link: 'https://codesandbox.io/s/zqrzxlwnvm',
    file: 'src/ComponentAsaSelector.js',
    story: (
      <glamorous.Div maxWidth={600} margin="auto" fontSize={24}>
        <Footer>
          <FooterHeader>I am in the footer header</FooterHeader>
          <div>I am some othercontent</div>
        </Footer>
      </glamorous.Div>
    ),
  });
