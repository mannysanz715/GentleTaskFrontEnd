const REACT_APP_BACK_END_SERVER_URL = 'localhost:8080/tasks'

async function getTaskList(){
  try {
    const response = await fetch(`${REACT_APP_BACK_END_SERVER_URL}`)
    return await response.json(response)

  } catch (error) {
    console.log(error)
    return error
  }
}


export{
  getTaskList,
}