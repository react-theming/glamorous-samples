import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

const footerHeaderClassName = 'app-footer-header';
export const FooterHeader = glamorous.div(footerHeaderClassName, { color: 'red' });
FooterHeader.className = footerHeaderClassName;

export const Footer = glamorous.div({
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.2)',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.8)',
    // here space is necessary, also I suggest using the & to make things more explicit
    [`& .${FooterHeader.className}`]: {
      color: 'white',
    },
  },
});
