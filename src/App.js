import Heading from "./Components/Heading";
import Card from "./Components/Card";
import AddMovie from "./Components/AddMovie";
import Detail from "./Components/Detail";
import {Routes, Route} from "react-router-dom";



function App() {

  return (
   <>
   <div className="App relative">
     <Heading/>
     <Routes>
      <Route path="/" element={<Card/>}/>
       <Route path="/addmovie" element={<AddMovie/>}/>
       <Route path="/detail/:id" element={<Detail/>}/>
     </Routes>
     </div>

   </>
  );
}


export default App;
