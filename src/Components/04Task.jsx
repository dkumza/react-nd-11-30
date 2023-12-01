import React, { useState } from "react";
import { Item } from "./Item";
import { Button } from "./Button";

export const Task04 = () => {
   const [item, setItem] = useState(["box"]);

   const handleAdd = () => {
      setItem([...item, "box"]);
   };
   const handleAddRed = () => {
      setItem([...item, "box red"]);
   };

   const handleReset = () => {
      setItem([]);
   };
   return (
      <div className="wrapper">
         <Item item={item} />
         <Button buttonText="ADD BLUE" btnClass="btn" handleClick={handleAdd} />
         <Button
            buttonText="ADD RED"
            btnClass="btn red"
            handleClick={handleAddRed}
         />
         <Button
            buttonText="RESET"
            btnClass="btn red"
            handleClick={handleReset}
         />
      </div>
   );
};
