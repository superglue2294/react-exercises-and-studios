import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      { label: "", value: "no boards yet!"},
      { label: "Breakfast", value: "breakFast" },
      { label: "Main Course", value: "mainCourse" },
      { label: "Desserts", value: "desserts" }
   ];
   
   const [boardName, setBoardName] = useState(boards[0].value);

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map(board => {
               return (
                  <option value={board.value}>{board.label}</option>
               )
            })}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
