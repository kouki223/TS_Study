import './App.css'
import { useState } from 'react';

function App() {
  return (
    <>
      <LikeButton />
    </>
  )
}

function LikeButton() {
  const [count, setCount] = useState(999);
  const Increment = () => {
    setCount(count + 1)
  }
  return <button onClick={Increment} className="likeButton">♥ {count}</button>
}

export default App
