export default function(props){
     const unit = [" ", "g", "kg", "cup", "tsp", "tbsp", "oz", "lbs"];
     const unitHtml = unit.map(elem=>{
        return <option key = {elem} value = {elem}>{elem}</option>

     })
       
     
return(
    
    <div className='eachIng'>
            <form>
            <input type='text' id='ing1' value={props.currentName} onChange={props.clickIng} placeholder="Ingredient Name" />
            <input type='number' id='qtt1' value={props.currentQnt} onChange={props.clickQnt} placeholder="Ingredient Quantity" />
             <div className="dropdown">
                 <select onChange = {props.clickUnit} value={props.currentUnit} name = "dropdown">
                 {unitHtml}
                </select>
            </div> 
            <button type='submit' onClick={props.addIng}>Add</button>
            </form>
    </div>
)

}