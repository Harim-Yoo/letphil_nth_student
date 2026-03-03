import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "about",
        Component: About
      },
      {
        path: "contact",
        Component: Contact
      }
    ]
  },
  {
    path: "/protected-routes",
    Component: ProtectedRoutes,
    children: [
      {
        index: true,
        path: "dashboard",
        Component: Dashboard
      }
    ]
  }
])
