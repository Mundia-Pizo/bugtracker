
let lastID = 0;

export const addBug=()=>dispatch =>(
   {
       type: "ADD_BUG",
       payload: { 
           id:++lastID,
           description:"This is a new bug added"
     }
   }
 )