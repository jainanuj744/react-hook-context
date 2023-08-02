import logo from './logo.svg';
import './App.css';
import Family from './prop_drill/Family';
import Family_context from './context_api/Family_context';
import { FamilyContext } from './context_api/FamilyContext';

function App() {

  let familyInfo = {
    familyName : "Jains",
    onlyForParents : ()=>{
        return "Info for Parents";
    },
    onlyForGrandChildren : ()=>{
        return "Info for Grand Children";
    }
}


  return (
    <div>
    <Family></Family>
    </div>
  );
}

export default App;
