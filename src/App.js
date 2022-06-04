import logo from './logo.svg';
import './App.css';
import FbImageLibrary from 'react-fb-image-grid'
import Dashboard from './views/dashboard/dashboard';

import Profile from './views/profile/profile';
import Home from './views/home/home';
import Btn from './component/app';


import { useState, useEffect } from 'react'
import './App.css';
import Appp from './appp';
import Btnn from './component/app';
function App() {
  const [questions, setQuestions] = useState([])
  const [ind, setind] = useState(0)
  const [restart, setRestart] = useState(false)
  const [ans, setans] = useState(0)
  const [stat, setstate] = useState(false)

  useEffect(() => {
    getQuestions()
  }, [])



  const restrt = () => {
    setind(0)
    setans(0)
    setRestart(false)
  }
  const getQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    const tempQuestions = await response.json()
    setQuestions(tempQuestions.results)
   
  }
  
  

  console.log('questions -->', questions )
  const check =()=>{
  var res = ans + 1
   setans(res)
    setstate(!stat)
    let r = ind;
  if (r == questions.length - 1) {


    setRestart(true)
  } else {
    setind(++r)
    setRestart(false)
 

  }
     
  }
const btnnn=()=>{
  setstate(!stat)
  let r = ind;
  if (r == questions.length - 1) {


    setRestart(true)
  } else {
    setind(++r)
    setRestart(false)
 

  }
}
  if (!questions.length) return <div> Loading </div> 
  return (
    <div className="App">
      {restart ?
        <div> <h1 className='end' > The End</h1> <h3> your Score is {ans} </h3>  </div>

        :
        <div><Appp ques={questions[ind].question}  option={questions[ind].incorrect_answers} correctOption={questions[ind].correct_answer} onClick={check} othr={btnnn} stat={stat}/>  </div>
      }
          
      {restart ?
        // <Btnn className="btnn" name="ReStart" onClick={restrt} /> 
        <button className="btnn" onClick={restrt}> Restart </button>
        :
        // <Btnn name="next" onClick={next} />
        null
      }

    </div>
  )
}

export default App

