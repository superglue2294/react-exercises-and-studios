import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState('');
   const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
      document.querySelector(".recipeNotes").innerHTML=`Here's your notes: ${notes}`;
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         {/* {recipeStatus === true ? <p>{notes}</p> : <p>My Recipe Notes aren't here!</p>} */}
         <p className='recipeNotes'>My Recipe Notes aren't here!</p>

         {/* <p>I have not tried this recipe!</p> */}
      </div>
   );
}
