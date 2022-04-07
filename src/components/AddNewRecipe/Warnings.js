import FlashMessage from 'react-flash-message';

export default function(props){
     const warnings=['fill out all fields, numeric value needed at quantity', 'cannot submit an empty field', 'please fill out title/ingredient/steps']
return(<FlashMessage  duration={3000}>
                            <strong id='warning'>{warnings[props.warnID]}</strong>
                       </FlashMessage>)

}