import React from "react";

const Filter = ({ value, onChange }) => {
   return (
      <div>
         <label>Name filter</label>
         <input type="text" name="filter" value={value} onChange={onChange} />
      </div>
   );
   }

export default Filter;