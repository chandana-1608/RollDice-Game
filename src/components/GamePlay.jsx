import {useState} from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button, OutlineButton } from '../styled/Button.js'
import Rules from './Rules.jsx'

const GamePlay = () => {

  const[score,setScore]=useState(0)
  const[selectedNumber,setSelectedNumber]=useState()
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("")
  const [showRules,setShowRules]=useState(false)
 

  const generateRandomNumber=(min,max)=>{
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rollDice=()=>{
      if (!selectedNumber){
        setError("You have not selected any number")
        return;
      }
      setError("") 
      const randomNumber=generateRandomNumber(1,6)
      setCurrentDice((prev)=>randomNumber);
      
      if (selectedNumber==randomNumber){
        setScore((prev)=>prev+randomNumber)
      }
      else{
        setScore((prev)=>prev-2)
      }
      setSelectedNumber(undefined)
  }

  const resetScore=()=>{
    setScore(0);
  }


  return (

    <MainContainer>
        
        <div className="top_section">
          <TotalScore
            score={score} />
          <NumberSelector 
            selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}/>
        </div>
        <RollDice
          currentDice={currentDice}  rollDice={rollDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={()=> setShowRules((prev)=>(!prev))} >{showRules ? "Hide" : "Show"}Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer=styled.main`
  padding-top:70px;
 
  .top_section{
    display:flex;
    justify-content:space-between;
    align-items:end;
  }
  .btns{
    gap:10px;
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* max-width:220px; */
    align-items:center;
    gap:10px;
  }
`