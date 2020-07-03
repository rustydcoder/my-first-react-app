import React from 'react';
import TodoBanner from './components/TodoBanner';
import Table from './components/Table';
import InputTodo from './components/InputTodo';
import VisibilityControl from './components/VisibilityControl';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Emmanuel',
      todoItems: [
      ],
      showCompleted: true
    }
  }

  createNewTodo = (task) => {
    const { todoItems } = this.state;

    if (!todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...todoItems, { action: task, done: false }],
      }, _ => localStorage.setItem('todo', JSON.stringify(this.state)))
    }
  }

  toggleTodo = todo => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {
      ...item, done: !item.done
    } : item)
  })

  componentDidMount = () => {
    let data = localStorage.getItem('todo');
    this.setState(data ? JSON.parse(data) : {
      userName: 'Emmanuel',
      todoItems: [
      ],
      showCompleted: true
    })
  }

  render() {
    const { userName, todoItems, showCompleted } = this.state

    return (
      <div>
        <TodoBanner name={userName} tasks={todoItems} />
        <div className='container-fluid'>
          <InputTodo createTodo={this.createNewTodo} />

          <Table flag={false} items={todoItems} toggleDone={this.toggleTodo} />
        </div>

        <div className='bg-secondary text-white text-center p-2'>
          <VisibilityControl description='Completed Tasks'
            isChecked={showCompleted}
            callback={checked => this.setState({ showCompleted: checked })} />
        </div>

        {showCompleted && <Table flag={true} items={todoItems} toggleDone={this.toggleTodo} />}
      </div>
    )
  }
}

export default App;