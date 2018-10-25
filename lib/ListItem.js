import React from 'react';

const ListItem = ({todo}) => {
  return (
    <div style={{fontSize: '30px'}}>
      <input type="checkbox" />
      {todo}
    </div>
  )
}

export default ListItem;
