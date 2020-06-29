import React, { Component } from 'react';

const TableHead = () => (
   <thead>
      <tr>
         <th>Description</th>
         <th>Done</th>
      </tr>
   </thead>
)

const TableBody = props => {
   const rows = props.items.map((row, index) =>
      <tr key={index}>
         <td>{row.action}</td>
         <td>
            <input type="checkbox" checked={row.done} onChange={() => props.toggleDone(row)} />
         </td>
      </tr>
   )

   return <tbody>{rows}</tbody>
}

class Table extends Component {
   render() {
      const { items, toggleDone } = this.props
      return (
         <table className="table-bordered table table-striped">
            <TableHead />
            <TableBody toggleDone={toggleDone} items={items} />
         </table>
      )
   }
}

export default Table;