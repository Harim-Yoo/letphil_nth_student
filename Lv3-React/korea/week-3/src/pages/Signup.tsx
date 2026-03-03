import { useState } from 'react';
import { create } from 'zustand'
import useAuthStore from '../stores/useAuthStore';
type UserData = {
  username: string,
  password: string
}

const SignUp = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useAuthStore((state:any)=>state.login);

  const storeData = (e:React.FormEvent) => {
    e.preventDefault();
    const user = { username, password }
    if (username === "" || password === "") return;
    localStorage.setItem("user",JSON.stringify(user))
    localStorage.setItem("loggedIn", JSON.stringify(true))
    login();
    setUsername("")
    setPassword("")
  }

  return<>
  <form onSubmit={storeData}>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit">Sign Up</button>
  </form>
  </>
}

export default SignUp;