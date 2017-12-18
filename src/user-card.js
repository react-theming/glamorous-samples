import React from 'react';
import glamorous, { ThemeProvider, Div } from 'glamorous';

function getStyleOverrides(name) {
  return (props, ...rest) => {
    const overrides = props.theme.userLinkCard[name];
    if (typeof overrides === 'function') {
      return overrides(props, ...rest);
    }
    return overrides;
  };
}

const Avatar = glamorous.img(
  {
    borderRadius: '50%',
    width: 160,
    height: 160,
  },
  getStyleOverrides('image')
);

const Name = glamorous.div(
  {
    fontWeight: 'bold',
    color: '#D17705',
  },
  getStyleOverrides('name')
);

const Tagline = glamorous.div(
  {
    fontSize: '0.8em',
    color: '#57A71C',
  },
  getStyleOverrides('tagline')
);

function UserCard({ img, name, tagline, styleOverrides = {} }) {
  return (
    <ThemeProvider theme={{ userLinkCard: styleOverrides }}>
      <Div textAlign="center" css={getStyleOverrides('container')}>
        <Avatar src={img} />
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Div>
    </ThemeProvider>
  );
}

export default UserCard;
