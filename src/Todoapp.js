import React, { useState } from 'react';
import './App.css';

const ToDoApp = ({ onAddTask }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskStatus, setTaskStatus] = useState('todo');
  const [taskPriority, setTaskPriority] = useState('Low');

  const handleCreateTask = () => {
    if (typeof onAddTask === 'function') {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDate,
        priority: taskPriority,
      };
      onAddTask(taskStatus, newTask);
      setShowPopup(false);
      setTaskTitle('');
      setTaskDescription('');
      setTaskDate('');
      setTaskStatus('todo');
      setTaskPriority('Low');
    } else {
      console.error('onAddTask is not a function');
    }
  };

  return (
    <div className="todo-app">
      <div className="header">
        <div className="title">Desktop and Mobile Application</div>
        <button className="create-task-button" onClick={() => setShowPopup(true)}>
          Create Task
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create New Task</h2>
            <label>Title:</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />

            <label>Select Date:</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />

            <label>Status:</label>
            <select
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <option value="todo">TODO</option>
              <option value="inProgress">IN PROGRESS</option>
              <option value="completed">COMPLETED</option>
            </select>

            <label>Priority:</label>
            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <div className="popup-buttons">
              <button onClick={() => setShowPopup(false)}>Cancel</button>
              <button onClick={handleCreateTask}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoApp;
