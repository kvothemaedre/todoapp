import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Input = styled.input`
  border : none;
  border-bottom : 1px solid grey;
`
const Button = styled.button`
  border : 0px;
  border-radius : 3px;
  background : yellow;
`
function App() {
  //add a task
  const [task, setTask] = useState([]);
  const [taskElement, setTaskElement] = useState({
    text: '',
    key: 0,
  })
  const [val, setVal] = useState('');
  //making the form controlled
  function handleChange(event) {
    const { value } = event.target;
    console.log(value)
  }

  //add task
  function addTask() {
    console.log('task added')
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <Input type="text" value={taskElement} onChange={handleChange} />
        <Button />
      </form>

    </div>
  );
}

export default App;
