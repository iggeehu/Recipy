import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function(props){
    
      
   if (props.turnOnStepForm)
    {return(
       
       <div className='singleStep' >
              
              <textarea onChange={props.stepHandler} placeholder='Name your step here' />
              <FontAwesomeIcon onClick={props.submitStep} icon="fa-solid fa-plus" />
       </div>
    )
    }
    else {return null}
    
    }