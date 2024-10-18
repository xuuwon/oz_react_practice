import { Component, useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Main from "./page/Main";

function App() {
  const {count, increment, decrement} = useCounter(0, 5);
  
  const { loading: loading1 , data: data1 } = useFetch("http://localhost:3000/data")
  const { loading: loading2 , data: data2 } = useFetch("http://localhost:3001/data")
  const { loading: loading3 , data: data3 } = useFetch("http://localhost:3002/data")

  return(
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {!loading1 && (
        <ul>
          {data1.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
        </ul>
      )}
      {!loading2 && (
        <ul>
          {data2.map(el => <li key={'data2' + el.id}>{el.content}</li>)}
        </ul>
      )}
      {!loading3 && (
        <ul>
          {data3.map(el => <li key={'data3' + el.id}>{el.content}</li>)}
        </ul>
      )}
    </>
  )
}

export default App;

// 커스텀 훅
const useFetch = (url) => { // url에 요청을 보내고 데이터를 받아오는 커스텀 훅
  const [loading, setLoading] = useState(true); // 로딩 완료되면 false
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // error 관리하는 상태

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => { // 데이터 받아왔으면 false로
        setData(res)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { loading, data, error };
}


const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + step)
  }

  const decrement = () => {
    setCount((prev) => prev - step)
  }
  
  return {count, increment, decrement}
}