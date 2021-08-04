import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme};
  width: 70px;
  border-radius: 50%;
  height: 70px;
  position: fixed;
  right: 35px;
  bottom: 35px;
  cursor: pointer;
`
