import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 15vh;
    flex-direction: column;
    align-items: center;
`

export const Box = styled.div`
    width: 50%;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 42%);
    font-family: 'Open Sans', sans-serif;
`

Box.Header = styled.div`
    background: #007e47;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px;
    color: white;
    font-weight: bold;
`

Box.Body = styled.div`
    background: white;
    padding: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    div {
      margin: 10px;
    }
`