export default function(props){
    const unit = [" ", "g", "kg", "cup", "tsp", "tbsp", "oz", "lbs"];
    const unitHtml = unit.map(elem=>{
       return <option key = {elem} value = {elem}>{elem}</option>

    })
      

    
return(
   
   <div className='EditIng'>
           <form>
           <input type='text' className={props.currentID} name="name" value ={props.currentName} 
                   onChange={props.clicked}
                   />

           <input type='number' className={props.currentID} name="quantity" value = {props.currentQnt} 
           onChange={props.clicked} 
           />

            <div className='dropdown'>
                <select onChange = {props.clicked} 
                 className={props.currentID}
                 name="unit"
                 value={props.currentUnit} name = "dropdown">
                {unitHtml}
               </select>
            </div>
           

           <button type='submit' onClick={()=>props.addIng(currentID)}>Add</button>
           </form>
   </div>
)

}