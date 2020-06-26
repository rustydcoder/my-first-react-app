import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Emmanuel'
    }
  }

  changeData = () => {
    const { userName: name } = this.state
    this.setState({
      userName: name === 'Emmanuel' ? 'Rusty' : 'Emmanuel'
    })
  }

  render = () =>
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To Do List
      </h4>
      <button className="btn btn-danger ml-auto" onClick={this.changeData}>Change Name</button>
    </div>
}

export default App;