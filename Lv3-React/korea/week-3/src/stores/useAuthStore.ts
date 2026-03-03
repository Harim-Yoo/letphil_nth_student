import {create} from "zustand";

type AuthDataType = {
  isLoggedin: boolean;
  login: ()=> void;
  logout : () => void;
}
const useAuthStore = create<AuthDataType>((set)=>({
  isLoggedin: JSON.parse(localStorage.getItem("loggedIn") || "false"),
  login: ()=>set({isLoggedin:true}),
  logout: ()=> set({isLoggedin:false})
}))


export default useAuthStore;