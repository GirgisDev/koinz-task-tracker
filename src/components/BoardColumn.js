import React from 'react'
import { connect } from 'react-redux';
import { handleupdateTaskStatus } from '../actions/tasks.action';

const BoardColumn = ({status, name, items = [], dispatch}) => {
  const allowDrop = ev => {
    ev.preventDefault();
  }
  const dragItem = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function dropItem(ev) {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    dispatch(handleupdateTaskStatus({id, status}))
  }

  return (
    <div 
      className="board-column" 
      id={`${name}`}
      onDragOver={ev => allowDrop(ev)} 
      onDrop={ev => dropItem(ev)}>
      <h4 className="column-name">{name || "Column title"}</h4>
      {items.length > 0 && (
        items.map((item, i) => (
          <div 
            key={item.name + i} 
            id={item.id}
            draggable="true" onDragStart={ev => dragItem(ev)}
            className="board-column__task">{item.description}</div>
        ))
      )}
    </div>
  );
}
 
export default connect()(BoardColumn);