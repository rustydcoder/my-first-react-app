import React, { Component } from 'react';

export default class TodoBanner extends Component {
   render = () => {

      const { name, tasks } = this.props

      return (
         <h4 className='bg-primary text-white text-center p-2'>
            {name}'s To Do List
         ({tasks.filter(t => !t.done).length} items to do)
         </h4>
      )
   }
}