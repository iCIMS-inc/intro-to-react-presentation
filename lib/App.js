import React from 'react';
import PropTypes from 'prop-types';
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
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <Form 
          value={this.state.inputValue}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}  />
        <List todos={this.state.todos} />
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string
}

App.defaultProps = {
  title: 'To-do App'
}

export default App;
