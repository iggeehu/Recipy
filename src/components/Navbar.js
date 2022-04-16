import {Link} from "react-router-dom"
import "./Navbar.css"
import React from "react";
import { connect } from "react-redux";
import {changeAuth} from "../actions"

   class Navbar extends React.Component {
   constructor(props){
       super(props)
       this.renderButton = this.renderButton.bind(this)
   }

    renderButton(){
        if(this.props.AuthStatus == false)
        {return <button onClick={()=>this.props.changeAuth(true)}>Sign in</button>}
        else
        {return <button onClick={()=>this.props.changeAuth(false)}>Sign out</button>}
    }

    render(){
        console.log(this.props)
    return(
      <ul className='navbar'>
        <li className='navItem' id='navHome'><Link to='/'>Browse Recipe</Link></li>
        <li className='navItem' id='navAdd'><Link to='/Add'>Add New Recipe</Link></li>
        <li className='navItem' id='navSignIn'>{this.renderButton()}</li>
      </ul>)
            }

}

function mapStateToProps(state){
   return {AuthStatus: state.auth}
}

const mapDispatchToProps=(dispatch)=>{
    return {changeAuth: (isLoggedIn)=>dispatch(changeAuth(isLoggedIn))}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)