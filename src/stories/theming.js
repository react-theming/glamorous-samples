import React from 'react';
import glamorous from 'glamorous';
import { storiesOf } from '@storybook/react';

import { ThemableApp } from '../theming-basic';
import { WithThemeApp } from '../withTheme';
import { SwitchApp } from '../theming-switchable';

storiesOf('Theming', module)
  .addExample({
    title: 'Basic Themable',
    header: 'Glamorous Themeing',
    description: 'This is a demo of how to use themes with glamorous',
    link: 'https://codesandbox.io/s/o2yq9MkQk',
    file: 'src/theming-basic.js',
    // showBox: false,
    story: <ThemableApp />,
  })
  .addExample({
    title: 'withTheme',
    header: 'Glamorous Themeing - withTheme',
    description:
      'This is a demo of how to use the withTheme higher order component to access themes from non-glamorous components',
    link: 'https://codesandbox.io/s/qYmJjE4jy',
    file: 'src/withTheme.js',
    // showBox: false,
    story: <WithThemeApp />,
  })
  .addExample({
    title: 'switchable',
    header: 'Use the glamorous ThemeProvider for consistency',
    description:
      'In any mature application, you want to maintain consistency. This means colors, font sizes, and more. And some applications support white labeling or even allow user customizations. The ThemeProvider is a great way to support these use cases.',
    link: 'https://codesandbox.io/s/916yjppk3p',
    file: 'src/theming-switchable.js',
    // showBox: false,
    story: SwitchApp,
  });
