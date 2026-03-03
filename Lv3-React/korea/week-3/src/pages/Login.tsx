import {ReactEventHandler, useState} from "react";

/**
 * In local storage:
 * Username
 * Password
 * Validate username and password in form with the ones in the local storage
 *
 */

type UserData = {
  username: string;
  password: string
}


const Login = () => {

  const [userName, setUserName] = useState<string>("")
  const [passWord, setPassWord] = useState<string>("")
  const [savedUser, setSavedUser] = useState<UserData>({username:"",password:""})
  const [user, setUser] = useState<UserData>({username:"",password:""})
  
  const checkUser = (e: React.FormEvent) => {
    e.preventDefault();
    const savedUser = localStorage.getItem("user")
    if (!savedUser) {
      alert("There is no such user information in the storage");
      return
    }
    const fetchedUser:UserData = JSON.parse(savedUser)
    if (fetchedUser.username === userName && fetchedUser.password) {
      alert("Welcome!")
      setUser({...user, username: userName, password: passWord})
      return
    }
  }

  return<>
  <form onSubmit={checkUser}>
    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    <input type="password" value={passWord} onChange={(e)=>setPassWord(e.target.value)}/>
  </form>
  </>
}

export default Login;