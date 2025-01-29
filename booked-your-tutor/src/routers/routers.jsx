import { createBrowserRouter } from "react-router-dom";
 
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/Mainlayout/Mainlayout";
 
 

const routers = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout ></MainLayout> ,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home ></Home>
            }
        ]
    }

])

export default routers