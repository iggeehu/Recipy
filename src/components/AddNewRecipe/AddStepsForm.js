import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Warnings from './Warnings'
export default function(props){
    const copyCurrent = props.currentStep
    const copySteps=props.steps
    
    const display= props.stepFormIDs.map((elem)=>{
        
      
        //if this ID has been submitted, display it
        if(copySteps.filter(e=>e.id==elem).length==1)
        {   //console.log("this step has been submitted")
            const objectOfInterest=copySteps.filter(e=>e.id==elem)[0]
              
                return(
                    //submitted value with an edit button and a delete button
                     
                     <li key={elem} className='submittedStep display'>{objectOfInterest.value}
                     <button className='button' onClick={props.deleteSubmitted} id={elem}><FontAwesomeIcon className='icon' icon="fa-solid fa-trash" /></button>
                     <button className='button' onClick={props.editSubmitted} id={elem}><FontAwesomeIcon className='icon' icon="fa-solid fa-pen" /></button>
                    </li>
                )
                    
        }
        
        //if object with this ID has not been submitted
        if(copyCurrent.filter(e=>e.id==elem).length==1)
        {   const objectOfInterest=copyCurrent.filter(e=>e.id==elem)[0]
            //console.log(objectOfInterest)
            //console.log("this step has not been submitted")
            return(
   
         <li className='AddStepsForm form' key={elem}>
          <textarea onChange={props.stepFormHandler} id={elem} defaultValue={objectOfInterest.value} placeholder='Name your step here' />
              <button className='button' onClick={props.deleteForm} id={elem}><FontAwesomeIcon className='icon'  icon="fa-solid fa-trash" /></button>
              <button className='button' onClick={props.submitStep} id={elem}><FontAwesomeIcon className='icon'  icon="fa-solid fa-check" /></button>
         </li>)
        }
    }
    )


   return(
       <div>
   <button className='button' onClick={props.addForm}>Add A Step Field<FontAwesomeIcon className='icon' icon="fa-solid fa-plus" /></button>
   
   <ol>{display}</ol>
   {props.showStepWarning && <Warnings />}
   </div>)
}