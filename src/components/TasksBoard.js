import React from 'react'
import BoardColumn from './BoardColumn';
import { connect } from 'react-redux';

const TasksBoard = ({ todo, inProgress, done }) => {
  return (
    <div className="task-board">
      <BoardColumn items={todo} name="Todo" status="todo" />
      <BoardColumn items={inProgress} name="In progress" status="inProgress" />
      <BoardColumn items={done} name="Done" status="done" />
    </div>
  );
}

const filterTasks = (tasks, filterName) => {
  let filtered = tasks.filter(task => task.status === filterName)
  return filtered;
}

const mapStateToProps = ({tasks}) => {
  let todo = filterTasks(tasks, "todo"),
    inProgress = filterTasks(tasks, "inProgress"),
    done = filterTasks(tasks, "done");
  return {
    todo, inProgress, done
  }
}


export default connect(mapStateToProps)(TasksBoard);