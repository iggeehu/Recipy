export default function(props){

    return(
        <div>
            <form>
                <input type='text' value={props.titleField} onChange={props.handleTitle} placeholder='put the title of your recipe here' />
                
            </form>
        </div>
    )
}