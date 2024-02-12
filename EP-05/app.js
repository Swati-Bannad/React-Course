import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";


//<Rescard resData= {resList[0]} />

//App Component
const AppComponent = () => {
    return (
        <div> 
            <HeaderComponent /> 
            <BodyComponent />
        </div>
        
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);


