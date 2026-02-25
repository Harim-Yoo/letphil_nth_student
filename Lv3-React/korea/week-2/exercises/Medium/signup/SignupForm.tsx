import { useState } from "react"

// Build: A signup form.
// Requirements
// State:
//  - form object: { email, password, confirmPassword }
//  - errors object
// Validate on submit:
//  - email includes @
//  - password min 8 chars
//  - confirm matches password
// Show error messages under each input
// Disable submit if any errors exist OR fields empty

type Form = {
  email : string;
  password : string;
  confirmPassword : string;
}

type DataForm = {
  form: Form;
  errors: Form;
}
export const SignupForm = () => {
  const [dataForm, setDataForm] = useState<DataForm>(
    {
      form: {
        email:"",
        password: "",
        confirmPassword: ""
      },
      errors: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    }
  );

  const {form} = dataForm;

  const validateData = (dataForm: DataForm) => {
    const newErrors = {
      email:"",
      password:"",
      confirmPassword:""
    }
    
    if (!dataForm.form.email.includes("@")) newErrors.email = "You hould include @.";
    if (dataForm.form.password.length <=8) newErrors.password = "Minimum length of 8";
    if (dataForm.form.confirmPassword !== dataForm.form.password) newErrors.confirmPassword = "Wrong Password";
    setDataForm({...dataForm, errors: newErrors});
  }

  const errorError = dataForm.errors.email !== "" || dataForm.errors.password !== "" || dataForm.errors.confirmPassword !== "";
  const formError = dataForm.form.email === "" || dataForm.form.password === "" || dataForm.form.confirmPassword === "";
  return (
    <>
    <span>Signup</span>
    <input type="text" value={form.email} onChange={(e)=>setDataForm({...dataForm, form: {...dataForm.form, email:e.target.value}})}/>
    {dataForm.errors.email !== "" && <span>{dataForm.errors.email}</span>}
    <input type="text" value={form.password} onChange={(e)=>setDataForm({...dataForm, form: {...dataForm.form, password: e.target.value}})}/>
    {dataForm.errors.password !== "" && <span>{dataForm.errors.password}</span>}
    <input type="text" value={form.confirmPassword} onChange={(e)=>setDataForm({...dataForm, form: {...dataForm.form, confirmPassword: e.target.value}})}/>
    {dataForm.errors.confirmPassword !== "" && <span>{dataForm.errors.confirmPassword}</span>}
    <button onClick={()=>validateData(dataForm)} disabled={errorError || formError }>Submit</button>
    </>  
  )
}
