import { useState } from "react";

// Requirements
// State:
//  - step (1..3)
//  - data object (collect fields across steps)
// Step 1: name + email
// Step 2: address + city
// Step 3: review screen (shows all data)
// Buttons:
//  - Next (validates current step)
//  - Back
//  - Submit (only on step 3)
// Prevent moving forward if required fields empty

type DataType = {
  name: string;
  email:string;
  address:string;
  city:string
}

const StepCheck = (props: {
  firstParam:string;
  secondParam:string;
  fooCheck: ()=>void;
  barCheck: ()=>void;
}) => {
  const {fooCheck, barCheck} = props;
  return <>
  <button onClick = {fooCheck}>Next</button>
  <button onClick = {barCheck}>Back</button>
  </>  
}

const FinalCheck = (props: {
  barCheck: ()=> void;
  foobarCheck: () => void;
}) => {
  const {barCheck, foobarCheck } = props;
  return <>
  <button onClick = {barCheck}>Back</button>
  <button onClick = {foobarCheck}>Submit</button>
  </>

}
export const MultiStepForm = () => {
  const [state, setState] = useState<DataType>({
    name:"",
    email:"",
    address:"",
    city:""
  })

  const [step, setStep] = useState<number>(1)

  const firstCheck = (name:string, email:string) => {
    if (name.trim()==="" || email.trim()==="") return;
    setStep(2)
  }
  const secondCheck =  (address:string, city:string) => {
    if (address.trim()==="" || city.trim() === "") return;
    setStep(3)
  }

  const onBack = (id:number) => {
    if (id<=1) return;
    setStep(id-1);
  }
  const {name, email, address, city} = state;
  return <>
  <div>MultiStepForm</div>
  {step === 1 && (
    <>
      <div>First Check</div>
      <input type="text" value={name} onChange={(e)=>setState({...state,name:e.target.value})}/>
      <input type="text" value={email} onChange={(e)=>setState({...state,email:e.target.value})}/>
      <StepCheck 
        firstParam = {name}
        secondParam = {email}
        fooCheck = {()=>firstCheck(name,email)}
        barCheck = {()=>onBack(step)}
      />
    </>
  )}
  
  {step===2 && (
    <>
    <div>Second Check</div>
    <input type="text" value={address} onChange={(e)=>setState({...state,address:e.target.value})}/>
    <input type="text" value={city} onChange={(e)=>setState({...state,city:e.target.value})}/>
    <StepCheck 
      firstParam = {address}
      secondParam = {city}
      fooCheck = {()=>secondCheck(address,city)}
      barCheck = {()=>onBack(step)}
    />
    </>
  )}
  
  {step===3 && (
    
    <>
    <div>Final Check</div>
      <span>Name: {name}</span>
      <span>Email: {email}</span>
      <span>Address: {address}</span>
      <span>City: {city}</span>
      <FinalCheck 
        barCheck = {()=>onBack(step)}
        foobarCheck = {()=>alert("Successful Submission")}
      />
    </>

  )}
  </>
};
