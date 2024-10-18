import { Component, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Main from "./page/Main";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []) // 처음 불러올 때만 데이터를 받아오도록 빈 배열 추가

  return(
    <>
      <h1>데이터 목록</h1>
      {data.map(el => <div key={el.id}>{el.content}</div>)}
      <MouseFollower />
      <ScrollIndicator />
      <AlertTimer />
      <div style={{height: "300vh"}}></div>
    </>
  )
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => { // cleanup 함수
      window.removeEventListener('mousemove', handleMouseMove)
    };
  })

  return (
    <div style={{
      position: "fixed", 
      top: position.y,
      left: position.x,
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "blue",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none" // 다른 버튼 클릭 이벤트를 막지 않도록
    }}></div>
  )
}


const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = 
      document.documentElement.scrollHeight
      - document.documentElement.clientHeight

      const scrollPercentage = (scrollTop / windowHeight) * 100;

      setScrollWidth(scrollPercentage);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${scrollWidth}%`,
      height: "10px",
      backgroundColor: "blue"
    }}></div>
  )
}

const AlertTimer = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      showAlert === true ? alert('시간 초과') : null
    }, 3000)

    return () => {
      clearTimeout(setTimeoutId);
    }
  })

  return (
    <button onClick={() => setShowAlert(false)}>빨리 클릭!!!</button>
  )
}


export default App;
