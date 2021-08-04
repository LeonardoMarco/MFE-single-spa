import React from 'react'

import { Container, Box } from './styles'
import Parcel from 'single-spa-react/parcel'

function App() {
  return (
    <Container>
      <Box>
        <Box.Header>2188218</Box.Header>
        <Box.Body>
          <div>
            <div>Ida</div>
            <div>21/07/2021</div>
            <div>
              Embarque <br /> Belo Horizonte
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> Rio de Janeiro
            </div>
          </div>
          <hr />
          <div>
            <div>Volta</div>
            <div>27/07/2021</div>
            <div>
              Embarque <br /> Rio de Janeiro
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> Belo Horizonte
            </div>
          </div>
        </Box.Body>
      </Box>

      <Box>
        <Box.Header>2188211</Box.Header>
        <Box.Body>
          <div>
            <div>Ida</div>
            <div>19/06/2021</div>
            <div>
              Embarque <br /> São Paulo
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> Belo Horizonte
            </div>
          </div>
          <hr />
          <div>
            <div>Volta</div>
            <div>27/06/2021</div>
            <div>
              Embarque <br /> Belo Horizonte
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> São Paulo
            </div>
          </div>
        </Box.Body>
      </Box>

      <Box>
        <Box.Header>2188200</Box.Header>
        <Box.Body>
          <div>
            <div>Ida</div>
            <div>10/05/2021</div>
            <div>
              Embarque <br /> Belo Horizonte
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> Espirito Santo
            </div>
          </div>
          <hr />
          <div>
            <div>Volta</div>
            <div>20/05/2021</div>
            <div>
              Embarque <br /> Espirito Santo
            </div>
            <div>1 parada</div>
            <div>
              Desembarque <br /> Belo Horizonte
            </div>
          </div>
        </Box.Body>
      </Box>

      <Parcel 
        config={() => System.import('@lm/chat')}
      />
    </Container>
  )
}

export default App
