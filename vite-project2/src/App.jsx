// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { Component } from 'react';

function App() {
  const [mood, setMood] = useState("Normal");

  return (
    <>
      <Face3 mood={mood} />
      <div className={mood === "Happy" ? 'happy' : mood === "Normal" ? 'normal' : 'sad'}>기분: {mood}</div>
      <div>
        <button onClick={() => setMood("Happy")}>HAPPY</button>            
        <button onClick={() => setMood("Normal")}>NORMAL</button>
        <button onClick={() => setMood("Sad")}>SAD</button>
      </div>
    </>);
}

// 1. if문으로 리턴하는 JSX문 바꿔주기
function Face({ mood }) {
  if (mood === "Happy") {
    return <div>😆</div>
  } else if (mood === "Normal") {
    return <div>🙂</div>
  } else {
    return <div>😭</div> 
  }
}

// 2. 삼항 연산자 사용하기
function Face2({ mood }) {
  return (
    <>
      {mood === "Happy" ? <div>😆</div>
      : mood === "Normal" ? <div>🙂</div>
      : <div>😭</div> 
      }
    </>
  )
}

// 3. 논리 연산자
function Face3({ mood }) {
  return (
    <>
      {mood === "Happy" && <div>😆</div>}
      {mood === "Normal" && <div>🙂</div>}
      {mood === "Sad" && <div>😭</div>}
    </>
  )
}

export default App;
