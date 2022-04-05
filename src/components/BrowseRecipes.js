import {store, currentState} from "./redux"

export default function(props){
    console.log('browseRecipe running')
    console.log(currentState.myRecipes)
    var displayRecipes = []
    if(currentState.myRecipes.length>0)
    {
        displayRecipes = currentState.myRecipes.map(
            elem=> 
            {   
                return (<li key={elem.recipeID} className='recipeDisplayBox'>
                {elem.title}
                
                </li>)
            }

        )
    }
    return(
        <div>
        <h1>Browse Recipes</h1>
        <ul>
            {displayRecipes}
        </ul>
        </div>

    )
}