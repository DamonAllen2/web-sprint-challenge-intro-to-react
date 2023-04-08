// Write your Character component here
import styled from "styled-components";

const StyledCharacter = styled.div `
    font-family: Fantasy;
    padding: 1px;
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-right: 300px;
    margin-left: 300px;
`

export default function Character({ data, openFunction, id }) {
   
    return (
        <StyledCharacter onClick={() => openFunction(id)} id={data.id}>
            <h1>{data.name}</h1>
        </StyledCharacter>
    )
}