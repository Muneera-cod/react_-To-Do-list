import React, { useState } from 'react'

import './App.css'

function App() {
  const [newTodo,setNewTodo] = useState("")
  const [todos,setTodos] = useState([])
 
  const addTodo=()=>{
    if(newTodo.trim() !== ""){
      setTodos([...todos,newTodo])
    }
  }
  const deleteTodo=(index)=>{
    const afterdelete=todos.filter((element,i)=>i !== index);
    setTodos(afterdelete);
 }
  return (
  
    <div className='container'>
      <div className='todocontainer'>
        <h2>To Do list</h2>
       
        <input type="text" placeholder='+Add a task' className='inputli' value={newTodo} onChange={(event)=>setNewTodo(event.target.value)}/>
        <button className='btn2' onClick={addTodo}>ADD</button>
        
        <div className='list'>
          <ol>
             {todos.map((todo,index) =>
             <li key={index} className='lii' >
              <span className='text'>{todo}</span>
              <button className='btn1' onClick={()=>deleteTodo(index)}>✔️</button>
              </li>
              
            )}
            
          </ol>
        </div>

      </div>
    </div>
    
    
  )
}

export default App
