var heading=document.createElement('h1');
heading.innerText="Hello from Javascript";
document.getElementById('demo').appendChild(heading);
console.log(heading);

var content=React.createElement('h1', {id:'test'} , 'Hello from React');
var root=ReactDOM.createRoot(document.getElementById('root'));
root.render(content);
console.log(content);

/*here content is javascript's object and react's element.
so when we console the content, in console we can see object insead of html tags.
ex:app.js:10 {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
react converts these objects to html and put in DOM 
ReactElement(object)=> HTML(Browser understands)

Ex:
<div id='parent'>
	<div id='child'>
		<h1>I am h1</h1>
	</div>
</div>
*/

var wrap=React.createElement(
	'div',
	{id:'parent'},
	React.createElement(
	'div',
	{id:'child'},
	React.createElement('h1',{},'I am h1')
	)
	);
   var root=ReactDOM.createRoot(document.getElementById('root1'));
  root.render(wrap);

 /*
 <div id='parent'>
	<div id='child'>
		<h1>I am h1</h1>
		<h2>I am h2</h2>
	</div>
</div>
 */ 
 var wrap1=React.createElement(
	'div',
	{id:'parent'},
	React.createElement(
	'div',
	{id:'child'},
	[React.createElement('h1',{},'I am h1'),React.createElement('h2',{},'I am h2')]
	)
	);
   var root=ReactDOM.createRoot(document.getElementById('root2'));
   root.render(wrap1)