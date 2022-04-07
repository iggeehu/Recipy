import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function(props){
    const unit = [" ", "g", "kg", "cup", "tsp", "tbsp", "oz", "lbs"];
    const unitHtml = unit.map(elem=>{
       return <option key = {elem} value = {elem}>{elem}</option>

    })


    const resultArray = props.ingredientList.filter((elem)=> {return elem.id==props.currentID})
      //the chosen ingredient object
      const result=resultArray[0]
      const index=props.ingredientList.indexOf(result)
      
    
return(
   
   <div className='EditIng'>
           <form>
           <input type='text' className={props.currentID} name="name" value = {props.currentName}
                   onChange={props.clicked}
                   />

           <input type='number' className={props.currentID} name="quantity" value = {props.currentQnt}
           onChange={props.clicked} 
           />

            <div className='dropdown'>
                <select onChange = {props.clicked} 
                 className={props.ingredientList[index].id}
                 name="unit"
                 value={props.currentUnit}>
                {unitHtml}
               </select>
            </div>
           

           <button type='submit' className = {props.ingredientList[index].id} onClick={props.addIng}><FontAwesomeIcon   icon="fa-solid fa-check" /></button>
           </form>
   </div>
)

}