import { useEffect, useState } from "react";

/**
 *  CleanUp Test
 * 
 */
function Hello(){
    const effectFn = () => {
        console.log("created :)")
        return () => console.log("destroyed :(")
    }
    useEffect(effectFn,[])// useEffect는 해당하는 컴포넌트가 destroyed 될 때 return 받은 함수를 실행한다.
    return <h1>Hello</h1>
  }
  
  function App2(){
      const [showing, setShowing] = useState(false);
      const onClick = () => setShowing((prev) => !prev)
      return (
        <div>
          {showing ? <Hello /> : null}
          <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
      )
  }
  export default App2;
  