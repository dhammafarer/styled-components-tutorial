import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  main: 'salmon'
};

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => (
  <Container>
    <p>index</p>
  </Container>
);
