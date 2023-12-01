import { useState } from "react";

import { Button } from "./Button";
import { Item } from "./Item";

export const Task01_02 = () => {
   const [newBorderRadius, setNewBorderRadius] = useState("50%");
   const [random, setRandom] = useState(0);

   function rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
   }

   const handleChange = () => {
      if (newBorderRadius === "0%") setNewBorderRadius("50%");
      if (newBorderRadius === "50%") setNewBorderRadius("0%");
   };

   const handleRandom = () => {
      setRandom(rand(5, 25));
   };
   return (
      <>
         <div className="wrapper">
            <Item newBorderRadius={newBorderRadius} newNumber={random} />
            <Button
               handleClick={handleChange}
               buttonText="Change"
               btnClass="btn"
            />
            <Button
               handleClick={handleRandom}
               buttonText="Random"
               btnClass="btn red"
            />
         </div>
      </>
   );
};
