import React from 'react';
import Form from './Form.js';
import List from './List.js';
import initialTodos from './mockTodos.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: initialTodos
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const newTodo = {
      text: this.state.inputValue,
      key: new Date().getTime()
    }

    this.setState({
      inputValue: '',
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Form 
          value={this.state.inputValue}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}  />
        <List todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
