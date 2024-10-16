// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { Component } from 'react';
import { Link, Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  // navigate( ? )

  const location = useLocation();

  return (
    <>
      <div>
        {/* <Link to="/main">메인</Link>
        <Link to="/mypage"> 마이페이지</Link>
        <Link to="/test"> 테스트</Link> */}

        <div>
          <button onClick={() => navigate('/main')}>메인</button>
          <button onClick={() => navigate('/mypage')}>마이페이지</button>
          <button onClick={() => navigate('/test')}>테스트</button>
        </div>

        <div>
          <button onClick={() => navigate(1)}>{`앞으로 가기 ->`}</button>
          <button onClick={() => navigate(-1)}>{`<- 뒤로 가기`}</button>
        </div>
      </div>
      
      <Routes>
        <Route path="/main" element={<Main />}/>
        <Route path="/mypage" element={<div>마이 페이지</div>}/>
        <Route path="/test" element={<div>테스트 페이지</div>}/>
      </Routes>
    </>);
}

function Main() {
  const params = useParams();
  console.log(params.name);

  const location = useLocation();
  console.log(location.search); // 물음표 뒤 문자열
  // http://localhost:5174/main?name=yuwon&school=ozcoding
  // -> ?name=yuwon&school=ozcoding

  const [searchParams, setSearchParams] = useSearchParams();
  // 물음표 뒤 문자열에서 해당하는 값만 빼올 수 있음
  console.log(searchParams.get('name'));
  // -> yuwon
  console.log(searchParams.get('school'));
  // -> ozcoding

  return <div>메인 페이지</div>;
}


export default App;