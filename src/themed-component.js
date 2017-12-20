import React from 'react';
import glamorous, { withTheme } from 'glamorous';

const createStyle = ({ theme }) => ({
  color: theme.color,
  backgroundColor: theme.background,
  border: '2px black solid',
  borderRadius: theme.radius,
  padding: 26,
  margin: '10px 40px',
  fontSize: 26,
  fontFamily: 'Sans',
  textAlign: 'center',
});

export const Title = glamorous.h3(createStyle);

export const DataBlock = glamorous.div(
  createStyle,
  ({ theme }) => ({
    color: theme.altColor,
  }),
  {
    fontSize: 12,
    textAlign: 'left',
  }
);

// normal component that takes a theme prop
export const ThemeData = withTheme(({ theme }) => (
  <DataBlock>
    <div>
      Theme: <b>{theme.name}</b>
    </div>
    <div>
      Color: <b>{theme.color}</b>
    </div>
    <div>
      Alternative Color: <b>{theme.altColor}</b>
    </div>
    <div>
      Background: <b>{theme.background}</b>
    </div>
    <div>
      Radius: <b>{theme.radius}</b>
    </div>
  </DataBlock>
));
