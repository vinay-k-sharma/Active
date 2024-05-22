import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/layout"
import Home from "../components/pages/Home"

export const Router = () => {
    return createBrowserRouter([
        {
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        }
    ])
}