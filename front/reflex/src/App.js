import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (evnet) => setKeyword(evnet.target.value);

  console.log("I run all the time")
  useEffect(()=>{
    console.log("call the api")
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("call the api...")
    }
  },[keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes")
  },[counter])
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
