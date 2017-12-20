import React from 'react';
import { storiesOf } from '@storybook/react';

import { gTheme } from '../../addon';

import { Title, ThemeData } from '../themed-component';
import { theme } from '../.theme/default';

storiesOf('Theming', module)
  .addDecorator(gTheme(theme))
  .addExample({
    title: 'with Addon',
    header: 'Creating themable glamorous components with Storybook',
    description: 'This example of how you can separate your themable component and a theme object. Here we use special storybook addon for glamorous to edit theme and see how it effects on component appearance. You can find and change theme data in src/.theme folder',
    link: 'https://github.com/react-theming',
    file: 'src/themed-component.js',
    showBox: false,
    story: (
      <div>
        <Title>Glamorous 💄</Title>
        <ThemeData />
      </div>
    ),
  });
