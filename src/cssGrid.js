import React from 'react';
import glamorous from 'glamorous';

// Example inspired by http://gridbyexample.com/examples/example12/
const MyGrid = glamorous.div({
  margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
        "....... header header"
        "sidebar content content"
        "footer  footer  footer"
      `,
  },
});

const Box = glamorous.div({
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 5,
  padding: 10,
  fontSize: '150%',
});

const HeaderFooter = glamorous(Box)({
  backgroundColor: '#999',
});

export function AppCssGrid() {
  return (
    <glamorous.Div maxWidth={600} margin="auto" fontSize={24}>
      <MyGrid css={{ marginBottom: 30, marginTop: 20 }}>
        <HeaderFooter css={{ gridArea: 'header' }}>Header</HeaderFooter>
        <Box css={{ gridArea: 'sidebar' }}>Sidebar</Box>
        <Box css={{ gridArea: 'content' }}>
          Content
          <br />
          More content than we had before so this column is now quite tall.
        </Box>
        <HeaderFooter css={{ gridArea: 'footer' }}>Footer</HeaderFooter>
      </MyGrid>
    </glamorous.Div>
  );
}
