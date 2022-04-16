export default function(props){

    return(
        <div id = 'titleForm'>
            
                <input id = 'titleFormInput' className ='titleField' type='text' 
                
                value={props.titleField} onChange={props.handleTitle} placeholder='put the title of your recipe here' />
            
        </div>
    )
}