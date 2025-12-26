import { useState } from 'react'

function App() {
  const [myAnswer, setMyanswer] = useState("");
  const [result, setResult] = useState("");
  const correctAnswer = "4";

  const checkAnswer = () => {
    (myAnswer===correctAnswer) ? setResult("정답입니다") : setResult("틀렸습니다.")
  }
  return (
    <div>
      <h1>문제: 2+2 =? </h1>
      <input 
        onChange={(event)=>setMyanswer(event.target.value)}
        value={myAnswer}
        placeholder="정답을 입력하세요."/>
      <button onClick={checkAnswer}>제출하기</button>
      <p>{result}</p>
    </div>
  )
}
export default App
