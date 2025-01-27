import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1> <Todo task="learn react"></Todo>
      <Todo task="Trt jsx" isDone={true}></Todo>
      <Todo task="core concept"></Todo>
      <something name="mobile"></something>
      <something name="laptop"></something>
      <something name="computer"></something>
      <something name="watch"></something>
      <Person></Person>
      <Developer name="jahid"></Developer>
      <Developer name="Hasab"></Developer>
      <Developer name="asha"></Developer>
    </>
  );
}
function Something(props) {
  return <h2>The device:{props}</h2>;
}
function Person() {
  let age = 23;
  return (
    <div>
      <h3> I am a Person {age}</h3>
      <h3> I am a Person</h3>
      <h3> I am a Person</h3>
    </div>
  );
}
function Developer(props) {
  const style = {
    color: "red",
    backgroundColor: "yellow",
  };
  return (
    <div style={style}>
      <h2>Hi i am {props.name}</h2>
      <h3>I am a website developer</h3>
    </div>
  );
}

export default App;
