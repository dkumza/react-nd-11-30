import { Item } from "./Item";
import { Button } from "./Button";
import { useState } from "react";

export const Task03 = () => {
   const [value, setValue] = useState(0);

   const handlePlus = (value) => {
      setValue((value) => value + 1);
   };

   const handleMinus = (value) => {
      setValue((value) => value - 3);
   };

   return (
      <div className="wrapper">
         <Item newNumber={value} />
         <Button buttonText="+1" btnClass="btn" handleClick={handlePlus} />
         <Button buttonText="-3" btnClass="btn red" handleClick={handleMinus} />
      </div>
   );
};
