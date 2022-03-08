import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function AddedIngredients(props){

    
    console.log(props)
    
    if(props.ingredientList!==[])
    {const ingredientHTML= props.ingredientList.map((ing)=>
      
      <div className='ingredient' id={ing.name} key={ing.id}>

      <li>{ing.name}, {ing.quantity} {ing.unit}</li>
      <div onClick={()=>props.edit(ing.id)}><FontAwesomeIcon icon="fa-solid fa-pen" /></div>
      <div onClick = {()=>props.delete(ing.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></div>

      </div>
    
    );
    

    return (
            <div>
            <p>ingredients for this recipe:</p>
            <FontAwesomeIcon icon="fa-solid fa-carrot" />
            <ul>
            {ingredientHTML}
            </ul>
            
            </div>
    )
}

}