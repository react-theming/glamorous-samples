import React from 'react'
import glamorous, { Div } from 'glamorous'

function ExampleBox({children}) {
  return (
    <Div
      padding="4vw"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#6AB8AB"
      fontSize="5vw"
      width="100%"
    >
      <Div display="flex" flexDirection="column">
        <Div alignSelf="center" color="#333" marginBottom={4}>
          {`glamorous 💄`}
        </Div>
        <Div
          backgroundColor="white"
          borderWidth={4}
          borderStyle="solid"
          borderRadius={6}
          flex={1}
          flexWrap="wrap"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height="auto"
          width="50vw"
          maxHeight="600px"
          maxWidth="600px"
          borderColor="#CC3A4B"
          padding={20}
        >
          {children}
        </Div>
      </Div>
    </Div>
  )
}

export default ExampleBox

export const Button = glamorous.button({
  cursor: 'pointer',
  display: 'inline-block',
  color: 'red',
  fontSize: '16px',
  margin: '16px',
  padding: '8px 16px',
  border: '1px solid red',
  borderRadius: '4px',
  backgroundColor: 'white',
  transition: 'all 0.3s',
  '&:hover,&:focus': {
    backgroundColor: 'red',
    color: 'white',
  },
})

// We're replacing the <button> tag with an <a> tag, but reuse all the same styles
export const Link = glamorous(Button.withComponent('a'))({
  textDecoration: 'none',
})

const MyInput = glamorous.input()

export class MyComponent extends React.Component {
  alertValue = e => {
    e.preventDefault()
    console.log(this.input.value)
  }
  render() {
    return (
      <form onSubmit={this.alertValue}>
        <MyInput innerRef={r => (this.input = r)} />
        <glamorous.Button type="submit" marginTop={12} display="block">
          Submit
        </glamorous.Button>
      </form>
    )
  }
}

