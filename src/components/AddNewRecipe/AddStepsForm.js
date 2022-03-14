import SectionForm from "./SectionForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function(props){

      
    
return(
   
   <div className='AddStepsForm'>
          
           <div>
               
               <button onClick={props.addSection}>
                   <FontAwesomeIcon icon="fa-solid fa-section" /><div>Add A Section</div>
               </button>
           </div>
               
           <div>
                
               <button onClick={props.addStep}>
                   <FontAwesomeIcon onClick={props.addStep} icon="fa-solid fa-shoe-prints" /><div>Add A Step</div>
               </button>
           </div>
           
   </div>
)

}