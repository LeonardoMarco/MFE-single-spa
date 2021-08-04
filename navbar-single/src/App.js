import React from 'react';

import { Container } from './styles';

function App() {

  const theme = window.location.pathname.match('two') ? '#004986' : '#007e47'

  return (
    <Container theme={theme}>
      <a href="one">App1</a>
      <a href="two">App2</a>
    </Container>
  );
}

export default App;