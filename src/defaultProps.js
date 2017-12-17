import React, {Component} from 'react'
import {render} from 'react-dom'
import glamorous, {Label, Div} from 'glamorous'
import ExampleBox from './example-box'
import NodeGetter from './node-getter'

const AppInput = glamorous('input', {
  withProps: ({username}) =>
    username
      ? {
          type: 'text',
          pattern: '[a-z0-9]+',
          required: true,
          placeholder: 'Enter a username',
        }
      : null,
})(
  {
    width: '100%',
    maxWidth: 250,
    fontSize: '2.8vw',
  },
  ({node}) => {
    return [
      !node || !node.validity.valid
        ? {borderColor: 'red'}
        : {borderColor: 'green'},
      node && node.value ? {outline: 0} : null,
    ]
  },
)

export const AppInputWithProps = <ExampleBox>
    <Div
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
    >
      <Label htmlFor="input" marginRight={10} cursor="pointer">
        Username
      </Label>
      <Div flex="1">
        <NodeGetter>
        {({refCallback, node, rerender}) =>
            <AppInput
            username
            id="input"
            node={node}
            innerRef={refCallback}
            onChange={rerender}
            />}
        </NodeGetter>
      </Div>
    </Div>
  </ExampleBox>
