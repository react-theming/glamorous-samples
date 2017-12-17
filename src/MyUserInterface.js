import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

// Let's create some glamorous components!
// we'll try different API for that:
// - componentFactory
// - built-in GlamorousComponents
//
// and we'll see how easily we can do it:

// First let's create `div` and `img` components using
// glamorous componentFactory
const ComponentDiv = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ddd',
  padding: 16,
});
const TheMostGlamorousImg = glamorous.img({
  borderRadius: '50%',
  height: 180,
});
const Name = glamorous.div(
  // you can provide any number of args to these
  // component factories. They can be objects or
  // functions that return objects. Functions
  // are passed the props as the first argument.
  {
    fontWeight: 'bold',
  },
  props => ({ fontSize: props.size }),
);

// Next let's get `span` and `A` from GlamorousComponents
// and add styles to them via props
// Note that we even don't need to init a var for that
// (see how we use `glamorous.A` in the return expression)
const { Span } = glamorous;

// Let's create React Component `MyUserInterface`
// and use our Glamorous Components
export function MyUserInterface({ name, tagline, imageUrl, homepage, size }) {
  const taglineSize = size * 0.5;
  return (
    <ComponentDiv>
      <glamorous.A href={homepage} textDecoration="underline" color="#336479">
        <TheMostGlamorousImg src={imageUrl} />
        {/*
          notice that we're passing the size prop and
          that determins the fontSize based
        */}
        <Name size={size}>{name}</Name>
      </glamorous.A>
      <Span fontSize={taglineSize} color="#767676">
        {tagline}
      </Span>
    </ComponentDiv>
  );
};


