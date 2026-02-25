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

type DataForm = {
  email : string;
  password : string | number;
  confirmPassword : string | number;
}

export const SignupForm = () => {
  const [dataForm, setDataForm] = useState<DataForm[]|null>(null);
  
  return (
    <div>SignupForm</div>
  )
}
