import React from 'react';
import TodoBanner from './components/TodoBanner';
import Table from './components/Table';
import InputTodo from './components/InputTodo';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Emmanuel',
      todoItems: [
        { action: 'Buy Flowers', done: false },
        { action: 'Get Shoes', done: false },
        { action: 'Collect Tickets', done: true },
        { action: 'Call Rusty', done: false }
      ]
    }
  }

  createNewTodo = (task) => {
    const { todoItems } = this.state;

    if (!todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...todoItems, { action: task, done: false }],
      })
    }
  }

  toggleTodo = todo => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {
      ...item, done: !item.done
    } : item)
  })

  render() {
    const { userName, todoItems } = this.state

    return (
      <div>
        <TodoBanner name={userName} tasks={todoItems} />

        <InputTodo createTodo={this.createNewTodo} />

        <Table items={todoItems} toggleDone={this.toggleTodo} />
      </div>
    )
  }
}

export default App;