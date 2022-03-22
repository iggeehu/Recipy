
import './App.css';
import AddNewRecipe from './components/AddNewRecipe'
import BrowseRecipes from './components/BrowseRecipes'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCarrot, faSection, faShoePrints, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons'


library.add(faPen, faTrash, faCarrot, faSection, faShoePrints, faPlus, faCheck)


function App() {
  
  return (
    <div className="App">
      
      <AddNewRecipe />
      
      <BrowseRecipes />
    </div>
  );
}

export default App;
