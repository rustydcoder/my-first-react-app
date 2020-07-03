import React, { Component } from 'react';

const capitalize = str => {
   return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

const TableHead = () => (
   <thead>
      <tr>
         <th>Description</th>
         <th>Done</th>
      </tr>
   </thead>
)

const TableBody = props => {
   const { items, toggleDone, flag } = props;
   const rows = items.filter(item => item.done === flag).map((row, index) =>
      <tr key={index}>
         <td>{capitalize(row.action)}</td>
         <td>
            <input type="checkbox" checked={row.done} onChange={() => toggleDone(row)} />
         </td>
      </tr>
   )

   return <tbody>{rows}</tbody>
}

class Table extends Component {
   render() {
      const { items, toggleDone, flag } = this.props
      return (
         <table className="table-bordered table table-striped">
            <TableHead />
            <TableBody flag={flag} toggleDone={toggleDone} items={items} />
         </table>
      )
   }
}

export default Table;