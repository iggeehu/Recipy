import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Warnings from "./Warnings";
import './AddNewRecipe.css'

export default function(props){
     const unit = [" ", "g", "kg", "cup", "tsp", "tbsp", "oz", "lbs"];
     const unitHtml = unit.map(elem=>{
        return <option key = {elem} value = {elem}>{elem}</option>

     })
       
     
return(
    
    <div className='ingredientForm'>
            
            <div className='ingredientName'>
            <input  type='text' id='ing1' className='ingredientText' value={props.currentName} onChange={props.clickIng} placeholder="Ingredient Name" />
            </div>
            
            <div className='ingredientQuantity'>
            <input  type='number' id='qtt1' className='quantityText' value={props.currentQnt} onChange={props.clickQnt} placeholder="Ingredient Quantity" />
            </div> 
             
             <div className="dropdown">
                 <select required className='ingUnit' onChange = {props.clickUnit} value={props.currentUnit} name = "dropdown">
                 {unitHtml}
                </select>
            </div> 


            <div className='submitIng'>
            <button className = 'ingbutton button' type='submit' onClick={props.addIng}><FontAwesomeIcon className='icon' icon="fa-solid fa-check" /></button>
            </div>

            <div className='warning'>
            {props.showIngredientWarning && <Warnings warnID= "0" />}
            </div>
            
    </div>
)

}