const REACT_APP_BACK_END_SERVER_URL = 'http://localhost:8080/tasks/'

async function getTaskList(){
  try {
    const response = await fetch(`http://localhost:8080/tasks`,{
      headers: { 'Content-Type': 'application/json' }
    })
    return await response.json(response)

  } catch (error) {
    console.log(error)
    return error
  }
}

async function createTask(formData){
  console.log(formData)
  console.log(JSON.stringify(formData))
  const data = JSON.stringify(formData)
try {
  const response = await fetch(`http://localhost:8080/tasks`,{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body : data
  })
  const json = response.json()
  if(json.err){
    throw new Error( json.err)
  }
} catch (error) {
  throw error
}
}


export{
  getTaskList, createTask
}