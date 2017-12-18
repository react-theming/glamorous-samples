import React from 'react';
import glamorous from 'glamorous';
import { storiesOf } from '@storybook/react';

import { MyUserInterface } from '../MyUserInterface';
import { Footer, FooterHeader } from '../ComponentAsaSelector';
import { Button, Link, MyComponent } from '../example-box';
import { AppInputWithProps } from '../defaultProps';
import { GlamImage, imageSrc } from '../propBasedStyle';

const StyledTitle = glamorous.div({
  fontSize: 20,
  fontFamily: 'Sans',
  backgroundColor: '#6AB8AB',
  textAlign: 'center',
  padding: 16,
});

storiesOf('Glamorous Components', module)
  .addExample({
    title: 'Basic',
    header: 'Glamorous. Simple example',
    description: "If you just want a div that's styled using glamor, you can do that.",
    link: 'https://codesandbox.io/s/mDLZ1oKn',
    file: 'src/stories/index.js',
    showBox: false,
    story: (
      <glamorous.Div marginTop={20}>
        <StyledTitle>Hello, glamorous world!</StyledTitle>
      </glamorous.Div>
    ),
  })
  .addExample({
    title: 'Glamorous Component',
    header: 'Glamorous Component',
    description: "If you just want a div that's styled using glamor, you can do that.",
    showBox: false,
    link: 'https://codesandbox.io/s/wmRo8OKDm',
    file: 'src/MyUserInterface.js',
    story: (
      <MyUserInterface
        name="Glamorous"
        tagline="simple, stylish, themable"
        homepage="http://npm.im/glamorous"
        imageUrl="https://octodex.github.com/images/Mardigrastocat.png"
        size={40}
      />
    ),
  })
  .addExample({
    title: 'Component as a selector',
    header: 'Glamorous Component',
    story: (
      <glamorous.Div maxWidth={600} margin="auto" fontSize={24}>
        <Footer>
          <FooterHeader>I am in the footer header</FooterHeader>
          <div>I am some othercontent</div>
        </Footer>
      </glamorous.Div>
    ),
  })
  .addExample({
    title: 'Change the rendered component',
    header: 'Change the component rendered by a glamorous component',
    description:
      'When you create a glamorous component factory, you determine what component will be rendered by components created by that factory. However, there could be cases where you want to change that component rendered. In this lesson we’ll see how to do that with the **withComponent** helper.',
    link: 'https://codesandbox.io/s/8zv23krr7j',
    file: 'src/example-box.js',
    story: [
      <Button key={1} onClick={() => console.log('Normal Button was clicked')}>
        Normal Button
      </Button>,
      <Link key={2} href="https://example.com">
        Normal Link
      </Link>,
    ],
  })
  .addExample({
    title: 'Ref to the element',
    header: 'Get a ref to the element rendered by glamorous',
    description:
      'Sometimes you need to get a reference to the react element that’s rendered. In this lesson we’ll learn about how to get a reference to the rendered element.',
    link: 'https://codesandbox.io/s/711k877z66',
    file: 'src/example-box.js',
    story: <MyComponent />,
  })
  .addExample({
    title: 'Attach default props',
    header: 'Attach default props to glamorous components',
    description:
      'You can use defaultProps on glamorous components, but sometimes you need a little bit more power. In this lesson we’ll talk about how to set props on your glamorous component using withProps.',
    link: 'https://codesandbox.io/s/0mj7yw38mv',
    file: 'src/defaultProps.js',
    story: AppInputWithProps,
  })
  .addExample({
    title: 'Props based style',
    header: 'Style glamorous components based on props',
    description:
      'Often you need dynamic styles. We can use props and dynamic style functions to add this functionality in a straightforward way to our glamorous components.',
    link: 'https://codesandbox.io/s/xo9z62029z',
    file: 'src/propBasedStyle.js',
    story: [
      <GlamImage key={1} src={imageSrc} />,
      <GlamImage key={2} rounded src={imageSrc} />,
      <GlamImage key={3} rounded={20} src={imageSrc} />,
      <GlamImage key={4} rounded faded src={imageSrc} />,
    ],
  });
