import React from "react";
import ReactDOM from "react-dom/client";

//React Elements using React
//React.createElement => React Element(JS object) => HTML Element(render)

const heading=React.createElement("h1", {id:"heading"}, "This is Third Episode:Laying Foundation");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React Elements using JSX
//JSX - is not HTML in JS - it is HTML-like or XML-like syntax
//JSX- code transplied before it reaches the JS engine from browser-done by > PARCEL > BABEL
//JSX =>Babel transpiles it to > React.createElement => React Element(JS object) => HTML Element(render)

const jsxHeading=<h1 id="heading1">JSX intro-React Apps using JSX</h1>
//if we have multiple lines we use () to enclose JSX code. to make babel understand from where JSX is starting and ending
//const jsxHeading=(<h1 id="heading1">JSX intro-React Apps using JSX</h1>)
console.log(jsxHeading)
const root1 = ReactDOM.createRoot(document.getElementById("jsx"));
root1.render(jsxHeading);



//React Component -> 1)Class Based Components(old way) 2)Functional Components(new)
//Functional Components- JS function which returns some JSX or react Element
const HeaderComponent=() => {
	return <h1 ClassName="heading1">This is Functional Component</h1>
}
//This can be written as below. in ES6 arrow function if logic is simple will ommit {} and return keyword
const HeaderComponent2=() =>  <h1 ClassName="heading1">This is Functional Component</h1>

//if we have multiple lines, will write JSX inside ().code will be like this
const HeaderComponent1=() =>  (
	<h1 ClassName="heading1">This is Functional Component</h1>
);
//HeaderComponent and HeaderComponent1 are exactly same

//Rendering Functional Component and function inside function 
const Definition = () => <p>Component Composition- one function component inside another function component </p>
const MainComponent =() =>  (
	<div>
		<h1>Functional Component</h1>
		<h3 ClassName="heading1">JS function which returns some JSX or react Element</h3>
		<Definition />
	</div>
);
const root2 = ReactDOM.createRoot(document.getElementById("fc"));
root2.render(<MainComponent />);

// difference between rendering React ELement and React Component
//React ELement ->root.render(heading);
//React Component ->root.render(<MainComponent />);

//{} -we can use any JS code inside JSX using {}- This is very powerful thing in JSX
//react Element inside react component

const elementtest= <h3>React Element inside React Component using {}</h3>
const TestComponent = () => (
	<div>
		<h1>Demo</h1>
		{elementtest}
		{100+200}
	</div>
);
const root3=ReactDOM.createRoot(document.getElementById("rerc"));
root3.render(<TestComponent />)

//we can use fun component inside another fun component
// we can use react element inside fun component
// we can use fun component inside react element
//cross side scripting attacks -JSX sanitizes if any malicious api data is coming and sends to JS Engine.
//syntax to render component can be written in 3 ways - 1)<TestComponent /> 2)<TestComponent></TestComponent> 3){TestComponent()}




