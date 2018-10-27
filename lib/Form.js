import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <input type="text" value={props.value} onChange={props.handleOnChange} style={{fontSize: '30px'}} />
      <button type="submit" style={{fontSize: '30px'}}>Add</button>
    </form>
  )
}

export default Form;
