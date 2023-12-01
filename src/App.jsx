import "./App.scss";

import { Task01_02 } from "./Components/01-02Task";
import { Task03 } from "./Components/03Task";

function App() {
   // #01_02. Sukurti aplikaciją, kuri turi mygtukus change
   // ir random bei atvaizduoja apskritimą su random skaičiumi viduje.
   // Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje,
   // o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

   // #03 Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0.
   // Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

   return (
      <div className="wrapper">
         {/* <Task01_02 /> */}
         <Task03 />
      </div>
   );
}

export default App;
