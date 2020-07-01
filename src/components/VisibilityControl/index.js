import React from 'react';

const VisibilityControl = props => {
   const { isChecked, callback, description } = props
   return (
      <div className='form-check'>
         <input
            className='form-check-input'
            type='checkbox'
            checked={isChecked}
            onChange={(e) => callback(e.target.checked)}
         />
         <label className='form-check-label'>
            Show {description}
         </label>
      </div>
   )
}

export default VisibilityControl