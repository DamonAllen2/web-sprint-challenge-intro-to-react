import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDetails = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    margin-left: 250px;
    margin-right: 250px;
    padding: 1px;
`

export default function Details(props) {
    const { currentId, data } = props;
    const [info, setInfo] = useState(null)

    console.log(info);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${currentId}`)
        .then ((response) => {
            console.log(response);
          setInfo(response.data);
        })
        .catch((err) => console.error(err))
      }, [currentId])
    return (
        <StyledDetails>
        {
            info &&
            <>
            <h1>{info.name} was born in {info.birth_year}</h1>
            <h3>Eye color: {info.eye_color}</h3>
            <h3>Gender: {info.gender}</h3>
            <h3>Hair color: {info.hair_color}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Skin color: {info.skin_color}</h3>
            </>
        }
        </StyledDetails>
    )
}