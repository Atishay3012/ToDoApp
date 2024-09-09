import React, { useState } from 'react';
import './App.css';
import ToDoApp from './Todoapp';  // Import ToDoApp component

const initialTasks = {
  todo: [
    {
      title: 'Brainstorming',
      priority: 'High',
      description: "Brainstorming brings team members' diverse experience into play.",
      dueDate: '18/09/2024',
    },
    {
      title: 'Wireframes',
      priority: 'High',
      description: 'Low fidelity wireframes include the most basic content and visuals.',
      dueDate: '18/09/2024',
    },
  ],
  inProgress: [
    {
      title: 'Onboarding Illustrations',
      priority: 'Low',
      dueDate: '18/10/2024',
    },
  ],
  completed: [
    {
      title: 'Design System',
      priority: 'Medium',
      description: 'It just needs to adapt the UI from what you did before.',
      dueDate: '12/10/2024',
    },
  ],
};

const priorityColors = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (status, newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], newTask],
    }));
  };

  return (
    <div className="task-board">
      {/* Move the ToDoApp component here to the top */}
      <ToDoApp onAddTask={handleAddTask} />
      
      <div className="columns">
        <div className="column todo">
          <h2>TODO  </h2>
          {tasks.todo.map((task, index) => (
            <div key={index} className="task-card">
              <div className="priority-badge" style={{ backgroundColor: priorityColors[task.priority] }}>
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </div>
          ))}
        </div>

        <div className="column in-progress">
          <h2>IN PROGRESS</h2>
          {tasks.inProgress.map((task, index) => (
            <div key={index} className="task-card">
              <div className="priority-badge" style={{ backgroundColor: priorityColors[task.priority] }}>
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </div>
          ))}
        </div>

        <div className="column completed">
          <h2>COMPLETED </h2>
          {tasks.completed.map((task, index) => (
            <div key={index} className="task-card">
              <div className="priority-badge" style={{ backgroundColor: priorityColors[task.priority] }}>
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
