import { Navigate, Outlet } from "react-router"
import useAuthStore  from "../stores/useAuthStore";

const ProtectedRoutes = () => {
  
  const isLoggedin = useAuthStore((state:any)=>state.isLoggedin)
   
  if (!isLoggedin) return <Navigate to="/" replace />
  return <>
  <div>You can only see this if logged in. You, Foo Bar</div>
  <Outlet/>
  </>
}

export default ProtectedRoutes