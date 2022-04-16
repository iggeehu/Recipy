import {store, currentState} from "./redux"
import {connect} from "react-redux";
import './BrowseRecipes/BrowseRecipes.css'

   export function BrowseRecipes (props){
    console.log('browseRecipe running')
    console.log(props)

    
    
    if(props.recipeStore.length>0)
    {
        var displayRecipes = props.recipeStore.map(
            elem=> 
            {   
                return (<li key={elem.recipeID} className='recipeDisplayBox'>
                {elem.title}, 
                Prep Time: {elem.prepTime.numeral} {elem.prepTime.unit}
                
                </li>)
            }

        )
    }
    return(
        <div>
        <h1>Browse Recipes</h1>
        <h2>Your recipes:</h2>
        <ul>
            {displayRecipes}
        </ul>
        </div>

    )
}

const mapStateToProps=(state)=>{
    return {recipeStore: state.recipe}}

export default connect(mapStateToProps)(BrowseRecipes)