import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditExistingIng from "./EditExistingIng";

export default function AddedIngredients(props){

    
  
    
    if(props.ingredientList!==[])
    {const ingredientHTML= props.ingredientList.map((ing)=>{
      
     
      if (ing.editStatus==false)
      {
      
      return (<div id={ing.name} key={ing.id}>
      
      <li>{ing.name}, {ing.quantity} {ing.unit}</li>
      <div onClick={()=>{props.edit(ing.id)}}><FontAwesomeIcon icon="fa-solid fa-pen" /></div>
      <div onClick = {()=>props.delete(ing.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></div>

      </div>)
      }

      if(ing.editStatus==true)
      {
      
      return(
        <EditExistingIng  
       ingredientList={props.ingredientList}
       clicked={props.clicked} 
       addIng={props.addIng}
       currentName={ing.name} 
       currentQnt={ing.quantity}
       currentUnit={ing.unit}
       currentID={ing.id} />
      )
      }

      
    });
    

    return (
            <div className='addedIngredients'>
            <p>ingredients for this recipe:</p>
            <FontAwesomeIcon icon="fa-solid fa-carrot" />
            <ul>
            {ingredientHTML}
            </ul>
            
            </div>
    )
}

}