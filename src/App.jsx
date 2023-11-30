import { useState } from "react";
import "./App.scss";
import { Button } from "./Components/Button";
import { Item } from "./Components/Item";

function App() {
   // ###1. Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą.
   //  Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą,
   //  o paspaudus dar kartą vėl pavirsti apskritimu.

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
      <div className="wrapper">
         <Item newBorderRadius={newBorderRadius} random={random} />
         <Button handleChange={handleChange} handleRandom={handleRandom} />
      </div>
   );
}

export default App;
