import React from 'react';
import { formatDate } from "./../utils/helpers"

const TaskDetails = ({task, status, closeFN, deleteTask, updateTask}) => {
  let taskDescription;
  return (
    <div className="task-details" onClick={closeFN}>
      <div className="task-details__box" onClick={ev => ev.stopPropagation()}>
        <h2 className="task-details__header">Task status: {status}</h2>
        <div className="task-details__details">
          Created at: &nbsp;
          <span className="task-details__details__pale">{ formatDate(task.createdAt) }</span>
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="description">Task description</label>
          <input 
            name="description" 
            className="form-group__control"
            id="description" 
            placeholder="Enter task description here"
            defaultValue={task.description}
            ref={input => taskDescription = input} />
        </div>
        
        <button 
          className="btn btn--danger"
          onClick={deleteTask}>Delete</button>
        <button 
          className="btn btn--primary"
          onClick={() => updateTask(taskDescription.value)}>Save and close</button>
        <button 
          className="btn btn--primary" 
          onClick={closeFN}>Close</button>
      </div>
    </div>
  );
}
 
export default TaskDetails;