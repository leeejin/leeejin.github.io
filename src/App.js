/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  // let num = [1, 2];

  // let [a, c] = [1, 2];

  // let a = num[0];
  // let c = num[1];


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        var copy = [...글제목];
        copy = copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <span onClick={() => {
          let copy = [...글제목]; //[]를 벗기고 다시 씌워 주세요
          copy[0] = '여자 코트 추천'
          console.log(copy==글제목);
          글제목변경(copy);
        }}>🔄</span>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
