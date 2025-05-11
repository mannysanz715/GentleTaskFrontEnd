import { useState, useEffect } from "react"
import * as taskServices from '../../services/TaskServices.js'
import "./ListOfTodo.css"
export default function ListOfTodo({todoList, handleDelete}){


  

  return(
    <>
      <h3>To-Do's :</h3>
      {!!todoList ? 
      todoList.map(todo =>{
        return(
          <div key={todo.id} className="todo-item">
            <p>{todo.taskTitle}:</p>
            <p>{todo.taskDescription}</p>
            <p>{todo.taskStatus}</p>
            <button value={todo.id} onClick={() => handleDelete(todo.id)}>Delete Task</button>
          </div>
        )
      })
      : <p>There is no list</p>}
    </>
  )
}
