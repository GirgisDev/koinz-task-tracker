import React, { useState } from 'react'
import { connect } from 'react-redux';
import { handleUpdateTaskStatus, handleAddNewTask, handleUpdateTaskDescription, handleDeleteTask } from '../actions/tasks.action';
import TaskDetails from './TaskDetails';

const BoardColumn = ({ status, name, items = [], allTasks, dispatch }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const allowDrop = ev => {
    ev.preventDefault();
  }
  const dragItem = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const dropItem = ev => {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("text"),
      task = allTasks.find(task => task.id === id);
    dispatch(handleUpdateTaskStatus({ task, status }));
  }

  const addNewTask = () => {
    let newTask = {
      id: `task${items.length + 1}`,
      description: "New task!",
      status: "todo",
      createdAt: (new Date()).toISOString()
    };
    dispatch(handleAddNewTask(newTask));
  }

  const showDetailsPopup = task => {
    setCurrentTask({ ...task });
    setShowDetails(true);
  }
  const closeDetailsPopup = () => {
    setShowDetails(false);
  }
  const updateTask = description => {
    dispatch(handleUpdateTaskDescription({ task: currentTask, description }));
    closeDetailsPopup();
  }
  const deleteTask = () => {
    let task = allTasks.find(task => task.id === currentTask.id);
    dispatch(handleDeleteTask(task));
    closeDetailsPopup();
  }

  return (
    <div
      className="board-column"
      id={name}
      onDragOver={ev => allowDrop(ev)}
      onDrop={ev => dropItem(ev)}>
      <h2 className="column-name">{name || "Column title"}</h2>
      {status === "todo" && <span onClick={addNewTask} className="add-task-btn">+</span>}
      {items.length > 0 && (
        items.map((item, i) => (
          <div
            key={item.id}
            id={item.id}
            draggable={status === "done" ? false : true} onDragStart={ev => dragItem(ev)}
            onClick={() => showDetailsPopup(item)}
            className={`board-column__task board-column__task--${status}`}>{item.description}</div>
        ))
      )}
      {showDetails && (
        <TaskDetails
          task={currentTask}
          status={name}
          closeFN={closeDetailsPopup}
          deleteTask={deleteTask}
          updateTask={updateTask} />
      )}
    </div>
  );
}

const mapStateToProps = ({ tasks }) => {
  return {
    allTasks: tasks
  }
}

export default connect(mapStateToProps)(BoardColumn);