import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {

  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function addTodo(){
    // let arr = todo;
    // arr.push(todoValue);
    setTodo(oldArray => [...oldArray, todoValue]);
   // setTodo(arr)
   setTodoValue("")
  }

  function removeTodo(index){
    let arr = [...todo]
    arr.splice(index,1) 

    console.log(todo)
    setTodo(arr)

  }

  return (
    <div className="container">
      <p>Welcome</p>
     <h1>Todo List</h1>
     <div>
      <input type="text" placeholder="enter a todo" value={todoValue} onChange={(event)=>setTodoValue(event.target.value)}></input>
      <button onClick={addTodo}>+</button>
     </div>
     {todo.map((elem,index)=>{
       return <div key={index}><h1>{elem}<button onClick={removeTodo.bind(this,index)}>X</button></h1></div>
     })}
    </div>
  );
}

export default App;
