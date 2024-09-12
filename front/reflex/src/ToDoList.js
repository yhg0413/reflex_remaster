import { useState } from "react"

const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDo)
        if(toDo === ""){
            return;
        }
        setToDo("");
        setToDos((currentArray) => [toDo,...currentArray]);
    }
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Write your ToDoList"/>
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ToDoList