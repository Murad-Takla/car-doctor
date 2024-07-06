import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Order from "../Pages/Order/Order";
import PrivateRouter from "./PrivateRoute/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
               loader: ({params}) => fetch(`https://genius-car-server-theta-eight.vercel.app/service/${params.id}`)              
            },
            {
                path: '/order',
                element: <PrivateRouter><Order></Order></PrivateRouter>
            }
        ]

    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])