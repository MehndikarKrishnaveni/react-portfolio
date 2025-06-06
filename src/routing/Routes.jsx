import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Education from "../components/pages/Education";
import Resume from "../components/pages/Resume";
import Contact from "../components/pages/Contact";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path: '/education',
                element: <Education/>
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
],
    {
        basename: "/react-portfolio", // for GitHub Pages
    }
);