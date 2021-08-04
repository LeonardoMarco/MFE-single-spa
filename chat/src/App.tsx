import React from 'react';

import { Container } from './styles';

const App: React.FC = () => {
  const theme = window.location.pathname.match('two') ? '#004986' : '#007e47'

  return <Container theme={theme} />;
}

export default App;