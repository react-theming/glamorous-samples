import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

import ExampleBox from '../src/example-box.js';

// enable after channel issue be fixed https://github.com/storybooks/storybook/issues/1981
// setOptions({
//   name: 'glamorous samples',
//   url: 'https://github.com/react-theming/glamorous-samples',
// });

setAddon({
  addExample(data) {
    const customData = {
      title: 'Story name',
      header: 'Glamorous Component',
      description: 'Read documentation at https://glamorous.rocks/',
      file: './src',
      link: 'https://codesandbox.io',
      showBox: true,
      ...data,
    };
    this.add(
      customData.title,
      withInfo({
        inline: true,
        header: false,
        propTables: false,
        text: `
          ### ${customData.header}
          
          ${customData.description}

          ---

          🔗 [Open in CodeSandbox](${customData.link})

          📂 ${customData.file}
        `,
      })(() => customData.showBox ?
        <ExampleBox>
          {customData.story}
        </ExampleBox> :
        customData.story
      )
    )
  }
});

function loadStories() {
  require('../src/stories');
  
}

configure(loadStories, module);

