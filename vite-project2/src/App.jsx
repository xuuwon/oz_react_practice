import { Component, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Main from "./page/Main";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return(
    <>
      {showCounter && <Counter />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>show?</button>
    </>
  )
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  // 1. 컴포넌트가 최초로 렌더링 될 때만 조작 하고 싶다.
  useEffect(() => {
    console.log("맨 처음 렌더링 될 때")
  }, [])

  // 2. 컴포넌트가 리렌더링 될 때 조작하고 싶다.
  useEffect(() => {
    console.log("리렌더링...")
  })

  // 3. 특정 상태값이 변할 때에만 조작하고 싶다.
  useEffect(() => {
    console.log("counter의 값이 변할 때")
  }, [counter])

  // 4. 컴포넌트가 최종적으로 언마운트 될 때 조작하고 싶다.
  useEffect(() => {
    return () => {
      console.log("컴포넌트 언마운트");
    }
  })

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("returned function");
    }
  }, [counter2]); // counter2가 변경될 때마다 useEffect 실행
  // 리 렌더링 되면 이전 컴포넌트는 사라지기 때문에 return된 함수도 호출됨.


  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <div>counter2: {counter2}</div>
      <button onClick={() => setCounter2(counter2 - 1)}>-1</button>
    </>
  )
}

export default App;
