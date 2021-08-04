import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    text-align: center;
    background: ${(props) => props.theme};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    a {
      margin: 10px;
      font-size: 20px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase
    }
`