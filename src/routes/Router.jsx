import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/signUp/SignUp";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Categories from "../components/categories/Categories";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'categories',
                element:<Categories></Categories>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;