import React from "react";
import IngredientForm from "./AddNewRecipe/IngredientForm";
import AddedIngredients from "./AddNewRecipe/AddedIngredients";
import AddStepsForm from "./AddNewRecipe/AddStepsForm";
import DisplaySteps from "./AddNewRecipe/DisplaySteps"
import { v4 as uuidv4 } from 'uuid';
import SectionForm from "./AddNewRecipe/SectionForm";
import FlashMessage from 'react-flash-message';


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
          editIngredient: false,
          
          stepCounter: 0,
          steps:[],
          sections: [],
          currentSection: "",
          turnOnSectionForm: false,
          turnOnStepForm: false
        }

        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
        this.addIng = this.addIng.bind(this);
        this.editIngredient=this.editIngredient.bind(this);
        this.deleteIngredient=this.deleteIngredient.bind(this)
        this.edit=this.edit.bind(this);
        this.addEdit=this.addEdit.bind(this);

        this.addSection=this.addSection.bind(this);
        this.addStep=this.addStep.bind(this)
        this.sectionHandler=this.sectionHandler.bind(this)
        this.submitSection=this.submitSection.bind(this)
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
        console.log("addIng triggered")
        const newCurrent = Object.assign({}, this.state.currentIngredient);
        const ID = uuidv4();
      
        newCurrent.id = ID;
        
        this.setState({currentIngredient: newCurrent})
        
        const copyArray = [...this.state.ingredientList]
        copyArray.push(newCurrent)
      
        this.setState(
          {
            ingredientList: copyArray
        })
       
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

    addSection(){
        this.setState({turnOnSectionForm:true})

        //if one section already exist and it does not contain any steps, show flash message
    }
  

    addStep(){
        this.setState({turnOnStepForm:true})
    }

    sectionHandler(e){
        console.log("sectionHandler initiated")
        
        let sectionCopy=this.state.currentSection;
        sectionCopy=e.target.value;
        this.setState({currentSection:sectionCopy})
    }

    submitSection(){
        const sectionsCopy=this.state.sections
        sectionsCopy.push(this.state.currentSection)
        this.setState({sections:sectionsCopy})
        this.setState({turnOnSectionForm: false})
        console.log(this.state.sections)
    }
    

    render(){
  
      
      
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

        <br></br>


        <div className='steps'>
        <DisplaySteps 
        sections={this.state.sections}
        steps={this.state.steps}
        sectionHandler={this.sectionHandler}
   
        />

        <SectionForm 
        sectionHandler={this.sectionHandler}
        submitSection={this.submitSection}
        sectionValue={this.state.currentSection}
        turnOnSectionForm={this.state.turnOnSectionForm}
        
        />
                    
                
        <AddStepsForm 
        addSection={this.addSection}
        addStep={this.addStep}
                      />
        </div>

        
      </div>
    );
    

    }

  }
  
 