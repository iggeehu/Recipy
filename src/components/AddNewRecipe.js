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
          unit:"",
          editStatus: false
        },
          ingredientList:[],
          recipes:[],
          editIngredient: false
        }

        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
        this.addIng = this.addIng.bind(this);
        this.editIngredient=this.editIngredient.bind(this);
        this.deleteIngredient=this.deleteIngredient.bind(this)
        this.edit=this.edit.bind(this);
    }
    
    handleIngredient(e){
      const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.name = e.target.value;
      this.setState({currentIngredient: newCurrent})
      
    }

    handleQuantity(e){
        const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.quantity = e.target.value;
      this.setState({currentIngredient: newCurrent})
      
    }
    

    handleUnit(e){
      
        const newCurrent = Object.assign({}, this.state.currentIngredient);
      newCurrent.unit = e.target.value;
      this.setState({currentIngredient: newCurrent})
      
    }

    addIng(e){
        
        //give the ingredient a unique ID
        e.preventDefault();
        const newCurrent = Object.assign({}, this.state.currentIngredient);
        const ID = uuidv4();
      
        newCurrent.id = ID;
        this.setState({currentIngredient: newCurrent})
        
      
        this.setState((state)=>{
            ingredientList: state.ingredientList.push(this.state.currentIngredient)
        });
      }
        
    
    editIngredient(id){
      
      const resultArray = this.state.ingredientList.filter((elem)=>elem.id===id)
      //the chosen ingredient object
      const result=resultArray[0]
      const index=this.state.ingredientList.indexOf(result)
      console.log(index)
      result.editStatus=true;
      console.log(result)

      const IngList = [...this.state.ingredientList]
      IngList[index] = result
      console.log(this.state.ingredientList)
      this.setState({ingredientList:IngList})
    }

    deleteIngredient(id){
       const index = this.state.ingredientList.findIndex((x)=>x.id===id)
       const ingredientList = this.state.ingredientList
       
       const newIngredientList=ingredientList.splice(index, 1)
       this.setState({inredientList: newIngredientList})
 
    }
        
    edit(e){
      console.log("edit run")
      const resultArray = this.state.ingredientList.filter((elem)=>elem.id===e.target.className)
      //the chosen ingredient object
      const result=resultArray[0]
      const index=this.state.ingredientList.indexOf(result)
      result[e.target.name] = e.target.value
      //put new object in the old index
      const IngList = [...this.state.ingredientList]
      IngList[index] = result
      this.setState({ingredientList:IngList})
    }

    

    addEdit(id){}
    

    render(){
      console.log("page renders")

    return (
      <div className="App">

        <div className='Ingredients'> 
        <AddedIngredients ingredientList={this.state.ingredientList} 
                          edit={this.editIngredient}
                          delete={this.deleteIngredient}
                          clicked={this.edit} 
                          addIng={this.addEdit}

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
  
 