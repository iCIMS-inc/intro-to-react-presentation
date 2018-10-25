import React from 'react';
import ListItem from './ListItem.js';

const List = ({todos}) => {
  const todoList = todos.map((todo) => {
    return (
      <ListItem todo={todo.text} key={todo.key} />
    )
  });

  return (
    <div>
      {todoList}
    </div>
  )
}

export default List;
