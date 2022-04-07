export default function(props){
    const unit = [" ", "min", "hour"];
    const unitHtml = unit.map(elem=>{
       return <option key = {elem} value = {elem}>{elem}</option>

    })
      
    return(
        <div id = 'prepForm'>
            
                <input id = 'prepFormInput' type='number' value={props.prepField.numerals} onChange={props.handlePrep} placeholder='prep time' />
                <div className="dropdown">
                 <select required className='prepUnit' onChange = {props.clickUnit} value={props.currentUnit} name = "dropdown">
                 {unitHtml}
                </select>
            </div> 
        </div>
    )
}