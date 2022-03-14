import SectionForm from "./SectionForm"

export default function (props){
    
    console.log("displaySteps")
    if(props.sections.length==0)
    {   
        
        return (<div>Click to add section, for example, "dry ingredients", "meat preparation"</div>)
    }

    //if there is at least one section
    let displaySteps=[]
    if(props.sections.length>0)
    {   
        //display the steps under the sections
            displaySteps = props.sections.map(
            (section)=>{
                  //only section exists and no steps - log section
                  if(props.steps.length==0)
                  {return(<div>{section}</div>)}
                  //if steps exist, log section and its steps
                  if (props.steps.length>0)
                    {    
                        const sectionSteps = props.steps.map(
                        (elem)=>{
                            if (elem.sect=section && props.steps[props.steps.indexOf(elem)-1].sect!=section)
                            {
                                return (
                                    <div>
                                    <div>{section}</div>
                                    <li>{elem.number}, {elem.step}</li>
                                    </div>)
                            }
                            if (elem.sect==section)
                            {return (<li>{elem.number}, {elem.step}</li>)
                            }
                        }
                     ) 
                    }
                })
            }
                
                
            
        

        return (<ol>{displaySteps}</ol>)

    }
    
        
   

    
    


