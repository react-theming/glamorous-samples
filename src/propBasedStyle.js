import React from 'react'
import {render} from 'react-dom'
import glamorous from 'glamorous'
import ExampleBox from './example-box'

export const imageSrc = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?dpr=2&auto=format&fit=crop&w=216&h=144&q=80&cs=tinysrgb';

export const GlamImage = glamorous.img(
  {
    border: '0',
    verticalAlign: 'middle',
    width: '20vw',
  },
  ({rounded}) =>
    rounded
      ? {
          borderRadius: typeof rounded === 'number' ? rounded : 6,
        }
      : null,
  ({faded}) => (faded ? {opacity: 0.7} : null),
)

