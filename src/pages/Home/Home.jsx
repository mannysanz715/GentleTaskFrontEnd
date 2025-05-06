import { useState } from "react";
function Home (){
  //Create state for getting task data
  const [tsakDate, setTaskData] = useState([])
  
  return (
    <>
      <h1>Welcome to the home page</h1>
      <h2>Lets Create Our First Task</h2>

      <form>
        <input type="text" name="taskTitle" id="taskTitle" placeholder="To-do Task"/>
        <input type="text" name="taskDescription" id="taskDescription" placeholder="Description"/>
        <div>
          <label>Status of Task: </label>
          <br/>
          <select name="taskStatus" id="taskStatus" placeholder="Task Status">
            <option type="checkbox" value="Not Complete" name="taskStatus" id="taskDescription" placeholder="Description">Not Complete</option>
            <option type="checkbox" name="taskStatus" value="Complete" id="taskDescription" placeholder="Description">Complete</option>
            <option type="checkbox" name="taskStatus" id="taskDescription" value="Started / Pending" placeholder="Description">Started / Pedning</option>
          </select>
        </div>
        <input type="text" name="taskDeadline" id="taskDeadline" placeholder="Deadline" />
      </form>
    </>
  )
}

export default Home;