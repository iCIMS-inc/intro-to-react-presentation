import React from 'react';

const ListItem = (props) => {
  return (
    <div style={{fontSize: '30px'}}>
      <input type="checkbox" />
      {props.children}
    </div>
  )
}

export default ListItem;
