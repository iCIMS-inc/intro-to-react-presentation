import React from 'react';
import ListItem from './ListItem.js';

const List = (props) => {
  const todoList = props.todos.map((todo) => {
    return (
      <ListItem key={todo.key}>{todo.text}</ListItem>
    )
  });

  return (
    <div>
      {todoList}
    </div>
  )
}

export default List;
