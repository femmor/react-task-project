import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
       const tasksFromServer = await fetchTasks()
       setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => { 
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 10000 + 1)
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = async (id) => {
    // delete request
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    }) 

    const deletedTask = tasks.filter(task => task.id !== id)
    setTasks(deletedTask)
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {
        showAddTask && <AddTask onAdd={addTask}/>
      }
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 
        <div className="no-task">No task to display</div>
      }
      <Footer/>
    </div>
  );
}

export default App;