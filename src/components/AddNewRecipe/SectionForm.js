import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function(props){
   
        
       if (props.turnOnSectionForm)
       {return(
       <div className='singleSection' id={props.sectionName}  >
              
              <textarea onChange={props.sectionHandler} value={props.sectionValue} placeholder='e.g. dry ingredient, meat prep' />
              <FontAwesomeIcon onClick={props.submitSection} icon="fa-solid fa-plus" />
       </div>)
       }
       else{
          return null
       }
}

    