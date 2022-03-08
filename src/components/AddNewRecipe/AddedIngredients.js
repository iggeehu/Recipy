import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditExistingIng from "./IngredientForm";

export default function AddedIngredients(props){

    
    console.log(props)
    
    if(props.ingredientList!==[])
    {const ingredientHTML= props.ingredientList.map((ing)=>{
      if (ing.editStatus===false)
      {
      console.log('if false run')
      return (<div className='ingredient' id={ing.name} key={ing.id}>
      
      <li>{ing.name}, {ing.quantity} {ing.unit}</li>
      <div onClick={()=>{props.edit(ing.id)}}><FontAwesomeIcon icon="fa-solid fa-pen" /></div>
      <div onClick = {()=>props.delete(ing.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></div>

      </div>)
      }

      if(ing.editStatus===true)
      {
        console.log('if true run')
      return(
       <EditExistingIng  
       clicked={props.clicked} 
       addIng={props.addIng}
       currentName={ing.name} 
       currentQnt={ing.quantity}
       currentUnit={ing.unit}
       currentID={ing.id}/>
      )
      }
    });
    

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