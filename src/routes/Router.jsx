import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/signUp/SignUp";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

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
                path:'/',
                element:<About></About>
            },
            {
                path:'/',
                element:<Contact></Contact>
            },
            {
                path:'/',
                element: <Login></Login>
            },
            {
                path:'/',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;