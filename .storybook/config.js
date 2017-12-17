import { configure, addDecorator, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';


setAddon({
  addExample(data) {
    const customData = {
      title: 'Story name',
      header: 'Glamorous Component',
      description: 'Read documentation at https://glamorous.rocks/',
      file: './src',
      link: 'https://codesandbox.io',
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

          [Open in CodeSandbox](${customData.link})

          *File location*: ${customData.file}
        `,
      })(() =>
        customData.story
      )
    )
  }
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

