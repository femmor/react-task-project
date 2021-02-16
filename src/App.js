import { useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    },
    {
      id: 2,
      text: "Do Groceries",
      day: "Feb 5th at 4:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Pick up Reign",
      day: "Feb 5th at 6:00pm",
      reminder: true
    },
  ])

  // toggleForm

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  // Delete task
  const deleteTask = (id) => {
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