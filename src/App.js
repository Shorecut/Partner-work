import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Paragraph from "./components/Paragraph";
import ParagraphList from "./components/ParagraphList";

function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);

  function addText(text) {
    setTexts([...texts, text]);
  }

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Counter decrement={decrement} increment={increment} count={count} />
      <Paragraph addText={addText} texts={texts} />
      <ParagraphList texts={texts} />
    </div>
  );
}

export default App;
