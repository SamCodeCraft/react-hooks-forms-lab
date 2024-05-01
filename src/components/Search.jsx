
import React, { useState } from "react";

function Search({ onSearchChange }){
   const [itemName, setItemName] = useState('');

   const handleInputChange = (event) => {
       const newItemName = event.target.value;
       setItemName(newItemName);
       onSearchChange(newItemName);
   }

    return(
        <div>
            <input
                type="text"
                value={itemName}
                onChange={handleInputChange}
            />
        </div>
    );
}
export default Search;