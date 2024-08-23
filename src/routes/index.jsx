import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./defaultLayout/defaultLayout"
import Home from "../components/home";
import Signup from "../components/home/form/signup";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/",
        element: <DefaultLayout/>,      
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "top",
                element: <div>top</div>,
            },
            {
                path: "dresses",
                element: <div>Dresses</div>,
            },
            {
                path: "kurta",
                element: <div>Kurta</div>,
            },
            {
                path: "jumpsuit",
                element: <div>Jump Suit</div>,
            },
            {
                path: "gown",
                element: <div>Gown</div>,
            },
            {
                path: "lehengacholi",
                element: <div>Lehenga Choli</div>,
            },
            {
                path: "saree",
                element: <div>Saree</div>,
            },
        ]  
    }
])

export default router;