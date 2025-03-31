
import './App.css'
import {HashRouter,Route,Routes} from 'react-router-dom';
import Home from './home';
import Aprilfool from './aprilfool';

function App() {

  return (
    <>
     <HashRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Aprilfool" element={<Aprilfool/>}/>
       </Routes>
     </HashRouter>
      
    </>
  )
}

export default App;
