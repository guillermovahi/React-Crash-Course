import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'

function App() {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
		{
			"id": 1,
			"text": "Learning Blockchain Fundamentals",
			"day": "Aug 30th at 2:30pm",
			"reminder": true
		  },
		  {
			"id": 2,
			"text": "Buy some Bitcoin",
			"day": "Aug 31th at 1:30pm",
			"reminder": false
		  }
	])

	//* Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	//* Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//* Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
	}

	return (
	<div className="container">
		<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
		{showAddTask && <AddTasks onAdd={addTask}/>}
		{tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks To Show')}
	</div>
  );
}

export default App;
