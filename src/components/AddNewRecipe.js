import React from "react";
import IngredientForm from "./AddNewRecipe/IngredientForm";
import AddedIngredients from "./AddNewRecipe/AddedIngredients";
import AddStepsForm from "./AddNewRecipe/AddStepsForm";
import { v4 as uuidv4 } from 'uuid';
import {connect} from "react-redux";
import {submitRecipe} from "../actions"

import FlashMessage from 'react-flash-message';


export class AddNewRecipe extends React.Component {
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
          editIngredient: false,
          showIngredieentWarning: false,
          stepCounter: 0,
          steps:[],
          currentStep:[{id: "initial form", value: ""}],
          stepFormIDs: ["initial form"],
          TimeSubmitted: "",
          RecipeID:"",
          Submitted: false,
          Recipe:{RecipeID:"", TimeSubmitted:"", IngredientList:[], Steps:[]}
          
        }

        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
        this.addIng = this.addIng.bind(this);
        this.editIngredient=this.editIngredient.bind(this);
        this.deleteIngredient=this.deleteIngredient.bind(this)
        this.edit=this.edit.bind(this);
        this.addEdit=this.addEdit.bind(this);
        this.submitRecipe=this.submitRecipe.bind(this);
        this.addForm=this.addForm.bind(this)
        this.deleteForm=this.deleteForm.bind(this)
        this.submitStep=this.submitStep.bind(this)
        this.stepFormHandler=this.stepFormHandler.bind(this)
        this.deleteSubmitted=this.deleteSubmitted.bind(this)
        this.editSubmitted=this.editSubmitted.bind(this)
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
        this.setState({showIngredientWarning:false}, ()=>{console.log("beginning addIng SIW" + this.state.showIngredieentWarning)})
        e.preventDefault();
        console.log("addIng triggered")
        const newCurrent = Object.assign({}, this.state.currentIngredient);
        const ID = uuidv4();
        newCurrent.id = ID;
        this.setState({currentIngredient: newCurrent})
        const copyArray = [...this.state.ingredientList]
        if(newCurrent.name=="" || newCurrent.quantity=="" || newCurrent.unit=="")
        { //console.log("warning condition met")
          this.setState({showIngredientWarning:true})}
        else{
        copyArray.push(newCurrent)
        this.setState({ingredientList: copyArray})
        }
        
      }
        
    
    editIngredient(id){
      const resultArray = this.state.ingredientList.filter((elem)=>elem.id===id)
      //the chosen ingredient object
      const result=resultArray[0]
      const index=this.state.ingredientList.indexOf(result)
      result.editStatus=true;
      const IngList = [...this.state.ingredientList]
      IngList[index] = result
      this.setState({ingredientList:IngList})
    }

    deleteIngredient(id){
       const index = this.state.ingredientList.findIndex((x)=>x.id===id)
       const ingredientList = this.state.ingredientList
       const newIngredientList=ingredientList.splice(index, 1)
       this.setState({inredientList: newIngredientList})
 
    }
        
    edit(e){
      console.log(e)
      const resultArray = this.state.ingredientList.filter((elem)=>elem.id===e.target.className)
      //the chosen ingredient object
      const result=resultArray[0];
      const index=this.state.ingredientList.indexOf(result)
      const type=e.target.name;
      result[type] = e.target.value;
      //put new object in the old index
      const IngList = [...this.state.ingredientList]
      IngList[index] = result
      this.setState({ingredientList:IngList})
    }

    

    addEdit(e){
      e.preventDefault();
      const resultArray = this.state.ingredientList.filter((elem)=>elem.id===e.target.className)
      //the chosen ingredient object
      const result=resultArray[0];
      const index=this.state.ingredientList.indexOf(result)
      const IngList = [...this.state.ingredientList]
      result.editStatus = false
      IngList[index] = result
      this.setState({ingredientList:IngList}, ()=>{console.log('state changed')})
    }

   

    addForm(){
      const ID = uuidv4();
      let newArray = this.state.stepFormIDs
      newArray.push(ID)
      const object = {id:ID, value:""}
      const copyCurrent = this.state.currentStep
      copyCurrent.push(object)
      this.setState({stepFormIDs: newArray, currentStep:copyCurrent}, 
        ()=>console.log("currentStep is now" + JSON.stringify(this.state.currentStep) + 
        "and current stepFormIDs is" + JSON.stringify(this.state.stepFormIDs) ))   
    }

    deleteForm(e){
        const ID=e.currentTarget.id
        let newArray=this.state.stepFormIDs
        //console.log("old stepFormIDs is" + newArray)
        newArray.splice(newArray.indexOf(ID),1)
        //console.log("new stepFormIDs is" + newArray)
        const copyCurrent=this.state.currentStep
        const ObjectOfInterest = copyCurrent.filter(e=>e.id==ID)[0]
        const index=copyCurrent.indexOf(ObjectOfInterest,1)
        copyCurrent.splice(index,1)
        this.setState({stepFormIDs:newArray, currentStep:copyCurrent})
        }
   
    submitStep(e){
       
       const idCopy=e.currentTarget.id
        const copy = this.state.currentStep
        //console.log("currentStep array is" + JSON.stringify(copy))
        const objectOfInterest = copy.filter(elem=>elem.id==idCopy)[0]
        //console.log("objectOfInterest is" + JSON.stringify(objectOfInterest) + "And id is" + idCopy)
       //if ObjectOfInterest has no value, then flash message
         if(objectOfInterest.value=="")
         {console.log("no empty field")}
         else
         { 
            const stepCopy = this.state.steps
            stepCopy.push(objectOfInterest)
            this.setState({steps:stepCopy})
            console.log("steps set")
            const index=copy.indexOf(objectOfInterest)
            copy.splice(index, 1)
            this.setState({currentStep: copy},()=>console.log("currentStep" + JSON.stringify(this.state.currentStep)))
         }
    }

    stepFormHandler(e){
      e.preventDefault()
      //console.log(e)
      const copy = this.state.currentStep
      let objectOfInterest = copy.filter(elem=>elem.id==e.target.id)[0]
      const index=copy.indexOf(objectOfInterest)
      objectOfInterest.value=e.target.value
      
      copy[index]=objectOfInterest
      this.setState({currentStep:copy})
    }


    deleteSubmitted(e){
        const targetID=e.currentTarget.id
        //console.log(targetID)
        //take the step off steps state
        const copySteps=this.state.steps
        const ObjectOI = copySteps.filter(e=>e.id==targetID)[0]
        const index=copySteps.indexOf(ObjectOI)
        copySteps.splice(index, 1)
        this.setState({steps:copySteps},()=>{
          if(this.state.steps.length==0)
          {this.addForm()}})
        }

    editSubmitted(e){
      const ID=e.currentTarget.id
      const copySteps=this.state.steps
      const objectOfInterest = copySteps.filter(e=>e.id==ID)[0]
      const index=copySteps.indexOf(objectOfInterest)
      copySteps.splice(index, 1)
      this.setState({steps:copySteps})
      //find the index of target ID at stepFormIDs
      const index2 = this.state.stepFormIDs.indexOf(ID)
      //console.log(this.state.stepFormIDs)
      const copyCurrent=this.state.currentStep
      copyCurrent.splice(index2, 0, objectOfInterest)
      this.setState({currentStep:copyCurrent})}

    submitRecipe() {
      const recipeID = uuidv4();
      const submissionTime=new Date()
      const RecipeObject = Object.assign({}, this.state.Recipe);
    }

    render(){
  
      console.log(this.props)
      //console.log("currentstep is" + JSON.stringify(this.state.currentStep))
      //console.log("steps is" + JSON.stringify(this.state.steps))
      //console.log("IDlist is" + JSON.stringify(this.state.stepFormIDs))
      
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
                        currentUnit={this.state.currentIngredient.unit} 
                        showIngredientWarning={this.state.showIngredientWarning}/>

        </div>

        <br></br>

        <h1>Please Add Instructional Steps</h1>
        
              
        <AddStepsForm 
        steps={this.state.steps}
        addForm={this.addForm}
        stepFormIDs={this.state.stepFormIDs}
        deleteForm={this.deleteForm}
        stepFormHandler={this.stepFormHandler}
        submitStep={this.submitStep}
        currentStep={this.state.currentStep}
        deleteSubmitted={this.deleteSubmitted}
        editSubmitted={this.editSubmitted}
        
                      />
        
        
        <button onClick={this.submitRecipe}>Submit This Recipe</button>
      </div>
    );
    

    }

  }

  const mapStateToProps=(state)=>{
    return {recipeStore: state}}

  const mapDispatchToProps=(dispatch)=>{
    return {submitRecipe: (recipe)=>dispatch(submitRecipe(recipe))}
  }

 export default connect(mapStateToProps, mapDispatchToProps)(AddNewRecipe)