import React from 'react';

const Form = ({value, handleOnChange, handleOnSubmit}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange} style={{fontSize: '30px'}} />
      <button type="submit" style={{fontSize: '30px'}}>Add</button>
    </form>
  )
}

export default Form;
