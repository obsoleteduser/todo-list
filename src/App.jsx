import { useState } from 'react'
import './App.css'

function App() {
 const [task, setTask] = useState('')
const [todos, setTodo] = useState([])

 const inputHandler  = (event)=>{
  setTask(event.target.value)
 }

 const addTodo = ()=>{
      setTodo([...todos, task])
 }

  return (
    <div className="App">
     <input onChange={inputHandler} type="text" className="task-input" />
     <button onClick={addTodo} className="add">Add</button>
     <div className="todos">
      {todos.map(todo =>{
        return <div>{todo}</div>
      })}
     </div>
    </div>
  )
}

export default App
