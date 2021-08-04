import React from 'react';

import { Container, Box } from './styles';
import Parcel from 'single-spa-react/parcel'

function App() {
  return (
    <Container>
        <Box>
          <Box.Header>
            2188218
          </Box.Header>
          <Box.Body>
            <div>
              Produto de Teste
            </div>
            <div>
              R$ 2.459,47
            </div>
            <div>
              Europa
            </div>
            <div>
              21/07/2021
            </div>
          </Box.Body>
        </Box>

        <Box>
          <Box.Header>
            2188212
          </Box.Header>
          <Box.Body>
            <div>
              Produto de Teste
            </div>
            <div>
              R$ 159,47
            </div>
            <div>
              Europa
            </div>
            <div>
              12/04/2021
            </div>
          </Box.Body>
        </Box>

        <Box>
          <Box.Header>
            21882132
          </Box.Header>
          <Box.Body>
            <div>
              Produto de Teste
            </div>
            <div>
              R$ 1.359,00
            </div>
            <div>
              Europa
            </div>
            <div>
              01/01/2021
            </div>
          </Box.Body>
        </Box>

        <Parcel 
          config={() => System.import('@lm/chat')}
        />
    </Container>
  );
}

export default App;