// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { Component } from 'react';

function App() {
  const [array, setArray] = useState([1, 2, 3]);

  const handler = () => {
    // array = [1, 2, 3, 4]; // 화면에는 렌더링 되지 않음 -> 상태 변경 함수를 거쳐야 함.
    // setArray([1, 2, 3, 4]); // 값이 같지만, 리 렌더링이 계속 됨 -> 참조 자료형은 주소값이 다 다르기 때문!
    
    // array.push(5);
    // setArray(array); // 같은 주소값이 계속 들어오기 때문에 리 렌더링 되지 않음. -> 복사를 사용해야 함.
    
    const newArray = array.slice(); // 참조형을 사용할 땐 복사해서 상태 변경 함수에 넣어줘야 리 렌더링이 됨.
    // const newArray = [...array]; -> 스프레드 연산자를 사용해서도 복사 가능
    newArray.push(5);
    setArray(newArray);
  }

  return (
    <>
      array : [{array.join(", ")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>);
}


export default App;
