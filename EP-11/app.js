import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
//import Grocery from "./components/Grocery";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";


//<Rescard resData= {resList[0]} />

//App Component
const AppComponent = () => {
    return (
        <div> 
            <HeaderComponent /> 
            <Outlet />
        </div>
        
    )
}
//Lazy Loading > code splitting > dynamic bundling > on demand loading (all these are same)
const Grocery = lazy(() => import("./components/Grocery"));
//Routing configuration - some info that will define or tell the browser what will happen a specific path.
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppComponent />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element: <BodyComponent />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<div className="container"><h1>Loading...</h1></div>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<ResMenu />
            }
        ]
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




