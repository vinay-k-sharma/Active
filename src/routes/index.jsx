import React from "react"
import { createBrowserRouter } from "react-router-dom"
const PortfolioDetails = React.lazy(() => import("../components/pages/PortfolioDetails"))
const Layout = React.lazy(() => import("../components/layout/layout"))
const Home = React.lazy(() => import("../components/pages/Home"))
const About = React.lazy(() => import("../components/pages/About"))
const Services = React.lazy(() => import("../components/pages/Services"))
const Blog = React.lazy(() => import("../components/pages/Blog"))
const Portfolio = React.lazy(() => import("../components/pages/Portfolio"))
const Team = React.lazy(() => import("../components/pages/Team"))
const Contact = React.lazy(() => import("../components/pages/Contact"))
const BlogDetails = React.lazy(() => import("../components/pages/BlogDetails"))
export const Router = () => {
    return createBrowserRouter([
        {
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/services',
                    element:<Services/>
                },
                {
                    path:'/portfolio',
                    element:<Portfolio/>
                },
                {
                    path:'/blog',
                    element:<Blog/>
                },
                {
                    path:'/team',
                    element:<Team/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/portfolio-details',
                    element:<PortfolioDetails/>
                },
                {
                    path:'/blog-details',
                    element:<BlogDetails/>
                }
            ]
        }
    ])
}