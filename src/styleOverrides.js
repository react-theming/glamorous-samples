import React from 'react';
import glamorous from 'glamorous';
import UserCard from './user-card';

const Label = glamorous.div({
  textAlign: 'center',
  marginBottom: 10,
  color: 'rebeccapurple',
});

export function StyleOverridesApp() {
  return (
    <glamorous.Div
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      fontSize={24}
      css={{ '& > *': { margin: 40 } }}
    >
      <div>
        <Label>Default</Label>
        <UserCard
          img="https://github.com/paulmolluzzo.png"
          name="Paul Molluzzo"
          tagline="A coder"
        />
      </div>
      <div>
        <Label>With styleOverrides</Label>
        <UserCard
          img="https://github.com/kentcdodds.png"
          name="Kent C. Dodds"
          tagline="A computer programmer"
          styleOverrides={{
            container: {
              display: 'flex',
              flexDirection: 'column-reverse',
              justifyContent: 'center',
              alignItems: 'center',
            },
            image: {
              width: 140,
              height: 140,
              transform: 'rotate(180deg)',
              ':hover': {
                transform: 'rotate(0deg)',
              },
            },
            name: {
              color: 'darkblue',
              fontStyle: 'italic',
            },
            tagline: {
              ':hover': {
                ':after': {
                  content: '"You are hovering!"',
                },
              },
            },
          }}
        />
      </div>
    </glamorous.Div>
  );
}
