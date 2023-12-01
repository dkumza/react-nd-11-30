import "./App.scss";

import { Task01_02 } from "./Components/01-02Task";
import { Task03 } from "./Components/03Task";
import { Task04 } from "./Components/04Task";

function App() {
   // #01_02. Sukurti aplikaciją, kuri turi mygtukus change
   // ir random bei atvaizduoja apskritimą su random skaičiumi viduje.
   // Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje,
   // o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

   // #03 Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0.
   // Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

   // #04_05 Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red,
   // prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t.
   // Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina

   return (
      <div className="wrapper">
         {/* <Task01_02 /> */}
         {/* <Task03 /> */}
         <Task04 />
      </div>
   );
}

export default App;
