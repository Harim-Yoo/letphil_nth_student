import { Outlet } from "react-router";
const Home = () => {
  return<>
  <div className="flex flex-col justify-center items-center w-auto min-h-screen">
    <h1>This is Home Page</h1>
  <Outlet/>
  </div>
  </>
}

export default Home;