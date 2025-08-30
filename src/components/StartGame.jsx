import React from 'react'
import styled from "styled-components"
import {Button} from '../styled/Button.js'
const StartGame = ({toggle}) => {
  return (
    <div>
      <Container>
        <div>
            <img src="images/dices.png" alt="dice" width="649px" height="522px"/>
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Paly Now</Button>
        </div>
      </Container>
    </div>
  )
}

export default StartGame

const Container=styled.div`
    display:flex;
    width:1182px;
    height:100vh;
    margin:0 auto;
    align-items:center;

    .content{
        
        h1{
            font-weight:700;
            font-size:96px;
            line-height:100%;
        }
    }
`;

