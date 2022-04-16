
import './App.css';
import AddNewRecipe from './components/AddNewRecipe'
import BrowseRecipes from './components/BrowseRecipes'
import { currentState } from './components/redux';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCarrot, faSection, faShoePrints, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Routes, Link, useParams} from "react-router-dom";
import Navbar from "./components/Navbar"

library.add(faPen, faTrash, faCarrot, faSection, faShoePrints, faPlus, faCheck)


function App(props) {
  
  return (
    <Router>
        <div className="App">
          <Navbar />
            
          <Routes>
            <Route exact path='/Add' element={<AddNewRecipe />} />
            
          
            <Route exact path='/' element={<BrowseRecipes />} />
    
          </Routes>
        </div>
    </Router>
  );
}

export default App;
