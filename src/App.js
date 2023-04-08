import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';

const StyledApp = styled.div`
  font-family: sans-serif;
`
const StyledHeader = styled.h1`
  font-size: 3rem;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  console.log(data);
  const [currentId, setCurrentId] = useState('');


  const opener = id => {
    setCurrentId(id + 1);
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then ((response) => {
      setData(response.data);
    })
    .catch((err) => console.error(err))
  }, [])

  return (
    <StyledApp className="App">
      <StyledHeader className="Header">Characters of The Star Wars Universe!</StyledHeader>
      {
        currentId && <Details data={data} currentId={currentId}/>
      }
      {
        data.map((data, idx) => {
          return <Character id={idx} openFunction={opener} data={data} />
        })
      }
    </StyledApp>
  );
}

export default App;
