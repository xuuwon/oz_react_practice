import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Main from "./page/Main";

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>검색</button>
      </header>

      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route> 
        {/* /:id를 붙임으로써 id를 받아서 detail 페이지로 넘어가게끔 */}
        <Route path="/search" element={<Search/>}></Route>
      </Routes>

      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
