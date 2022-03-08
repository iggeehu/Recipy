import React from "react";
import IngredientForm from "./AddNewRecipe/IngredientForm";
import AddedIngredients from "./AddNewRecipe/AddedIngredients";
import { v4 as uuidv4 } from 'uuid';

export default class AddNewRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state={
          ingID:[],
          currentIngredient:
          {id:"",
          name: "",
          quantity:"",
          unit:""
        },
          ingredientList:[],
          recipes:[]
        }

        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
        this.addIng = this.addIng.bind(this);
        this.editIngredient=this.editIngredient.bind(this);
        this.deleteIngredient=this.deleteIngredient.bind(this)
    }
    
    handleIngredient(e){
      const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.name = e.target.value;
      this.setState({currentIngredient: newCurrent})
      console.log("name registered")
    }

    handleQuantity(e){
        const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.quantity = e.target.value;
      this.setState({currentIngredient: newCurrent})
      console.log("qty registered")
    }
    

    handleUnit(e){
      console.log("handleUnitCalled")
        const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.unit = e.target.value;
      this.setState({currentIngredient: newCurrent})
      console.log("unit registered")
    }

    addIng(e){
        
        //give the ingredient a unique ID
        e.preventDefault();
        const newCurrent = Object.assign({}, this.state.currentIngredient);
        const ID = uuidv4();
      
        newCurrent.id = ID;
        console.log(newCurrent.id)
        this.setState({currentIngredient: newCurrent})
        
      
        this.setState((state)=>{
            ingredientList: state.ingredientList.push(this.state.currentIngredient)
        });
      }
        
    editIngredient(id){
      console.log(id)}

    deleteIngredient(id){
       const index = this.state.ingredientList.findIndex((x)=>x.id===id)
       const ingredientList = this.state.ingredientList
       
       const newIngredientList=ingredientList.splice(index, 1)
       this.setState({inredientList: newIngredientList})
 
    }
        
    

    render(){
      console.log("page renders")

    return (
      <div className="App">

        <div className='Ingredients'> 
        <AddedIngredients ingredientList={this.state.ingredientList} 
                          edit={this.editIngredient}
                          delete={this.deleteIngredient}
                          

        />

        <h1>Please Add Ingredients Here</h1>
        <IngredientForm clickUnit={this.handleUnit} 
                        clickIng={this.handleIngredient}
                        clickQnt={this.handleQuantity}
                        addIng={this.addIng}
                        currentName={this.state.currentIngredient.name} 
                        currentQnt={this.state.currentIngredient.quantity}
                        currentUnit={this.state.currentIngredient.unit} />


        </div>

        
      </div>
    );
    

    }

  }
  
 