import React, { Component } from 'react';

class InputTodo extends Component {
   constructor(props) {
      super(props)
      this.state = { newItemText: '' }
   }

   updateNewItemText = e => this.setState({ newItemText: e.target.value })

   appendNewTodo = () => {
      this.props.createTodo(this.state.newItemText)
      this.setState({ newItemText: '' })
   }

   render = () =>
      <div className='container-fluid'>
         <div className='my-1'>
            <input className='form-control' value={this.state.newItemText} onChange={this.updateNewItemText} />
            <button onClick={this.appendNewTodo} className='btn btn-primary mt-1'>
               Add
            </button>
         </div>
      </div>
}

export default InputTodo