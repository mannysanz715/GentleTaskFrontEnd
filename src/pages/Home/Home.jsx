import { useState, useEffect } from "react";
import ListOfTodo from "../../components/List_of_Todo/ListOfTodo.jsx";


import * as categoryServices from '../../services/CategoriesServices.js'
import * as taskServices from '../../services/TaskServices.js'

function Home (){
  //Create state for getting task data
  const [taskData, setTaskData] = useState({taskTitle : "", taskDescription : "", taskStatus : "", taskDeadline : "", categoryId : "" })
  let [list, setList] = useState([])
  

  async function fetchData() {
    try{
      const response = await taskServices.getTaskList()
      setList(response)
    }
    catch(error){
      console.log(error)
    }
  }

  async function handleDelete(id){
    await taskServices.deleteTask(id)
    await fetchData()
  }

  useEffect(()=>{
    fetchData()
  },[])





  function updateForm(e){
    setTaskData({...taskData, [e.target.name] : e.target.value})
  }


  async function submitForm(e){
    e.preventDefault()
    try {
      await taskServices.createTask(taskData)
      await fetchData()
      setTaskData({taskTitle : "", taskDescription : "", taskStatus : "", taskDeadline : "", categoryId : "" })
    } catch (error) {
      console.log(error)
    }
  }
  const {taskTitle, taskDescription, taskDeadline, taskStatus} = taskData

  return (
    <>
      <h1>Welcome to the home page</h1>
      <h2>Lets Create Our First Task</h2>
      <ListOfTodo todoList={list} handleDelete={handleDelete}/>
      <form>
        <input type="text" onChange={updateForm} name="taskTitle" id="taskTitle" value={taskTitle} placeholder="To-do Task"/>
        <input type="text" value={taskDescription} onChange={updateForm} name="taskDescription" id="taskDescription" placeholder="Description"/>
        <div>
          <label>Status of Task: </label>
          <br/>
          <select name="taskStatus" id="taskStatus" placeholder="Task Status" value={taskStatus} onChange={updateForm}>
            <option type="checkbox" value="Not Complete" name="taskStatus" id="taskDescription" placeholder="Description">Not Complete</option>
            <option type="checkbox" name="taskStatus" value="Complete" id="taskDescription" placeholder="Description">Complete</option>
            <option type="checkbox" name="taskStatus" id="taskDescription" value="Started / Pending" placeholder="Description">Started / Pedning</option>
          </select>
        </div>
        <input type="text" onChange={updateForm} name="taskDeadline" id="taskDeadline" placeholder="Deadline" value={taskDeadline} />
      <button onClick={submitForm}>Submit Task</button>
      </form>

    </>
  )
}

export default Home;