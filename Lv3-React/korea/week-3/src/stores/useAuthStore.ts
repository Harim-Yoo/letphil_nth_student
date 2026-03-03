import {create} from "zustand";

type AuthDataType = {
  isLoggedin: boolean;
  login: ()=> void;
  logout : () => void;
}
const useAuthStore = create<AuthDataType>((set)=>({
  isLoggedin: JSON.parse(localStorage.getItem("loggedIn") || "false"),
  login: ()=>{
    localStorage.setItem("loggedIn","true")
    set({isLoggedin:true})
  },
  logout: ()=> {
    localStorage.setItem("loggedIn", "false")
    set({isLoggedin:false})
  }
}))


export default useAuthStore;