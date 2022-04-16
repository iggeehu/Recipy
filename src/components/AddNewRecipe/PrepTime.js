export default function(props){
    const unit = [" ", "min", "hour"];
    const unitHtml = unit.map(elem=>{
       return <option key = {elem} value = {elem}>{elem}</option>

    })
      
    return(
        <div id = 'prepForm'>
            
            <input id = 'prepFormInput' type='number' className='prepNumber' 
            value={props.prepField.numeral} onChange={props.handlePrep} pattern="[0-9]*"
            placeholder='prep time' />

                <div className="dropdown">
                 <select required className='prepUnit' onChange = {props.clickUnit} value={props.prepField.unit} name = "dropdown">
                 {unitHtml}
                </select>
            </div> 
        </div>
    )
}