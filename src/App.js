import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import varImage from './var-js.png';
import numberImage from './numbers-js.png';
import assignImage from './assign-js.png';
import incDecImage from './inc-dec-js.png';
import 'react-awesome-slider/dist/styles.css';
import './App.scss';

const whatIsJs = (
  <div className="aws-content-box">
    <h1> What is Javascript?</h1>
    <p> Javascript is an easy-to-use programming language that can be embedded in the header of your web pages. It can enhance the dynamics and interactive features of your page by allowing you to perform calculations, check forms, write interactive games and more.</p>
  </div>
);

const jsObjectOriented = (
  <div className="aws-content-box">
    <h1> What is Object Oriented Programming?</h1>
    <p> OOP is a programming technique (note: not a language structure - you don't even need an object-oriented language to program in an object-oriented fashion) designed to simplify complicated programming concepts. In essence, object-oriented programming
    revolves around the idea of user- and system-defined chunks of data, and controlled means of accessing and modifying those chunks. </p>
    <p> Object-oriented programming consists of Objects, Methods and Properties. An object is basically a black box which stores some information. It may have a way for you to read that information and a way for you to write to, or change, that information. It may also have other less obvious ways of interacting with the information. </p>
  </div>
);

const jsObjectOrientedContinued = (
  <div className="aws-content-box">
    <p>Some of the information in the object may actually be directly accessible; other information may require you to use a method to access it - perhaps because the way the information is stored internally is of no use to you, or because only certain things can be written into that information space and the object needs to check that you're not going outside those limits.</p>
    <p>The directly accessible bits of information in the object are its properties. The difference between data accessed via properties and data accessed via methods is that with properties, you see exactly what you're doing to the object; with methods, unless you created the object yourself, you just see the effects of what you're doing.</p>
  </div>
);

const objectsAndProps = (
  <div className="aws-content-box">
    <h1> What are objects and properties?</h1>
    <p>Your web page document is an object. Any table, form, button, image, or link on your page is also an object. Each object has certain properties (information about the object). For example, the background color of your document is written document.bgcolor. You would change the color of your page to red by writing the line: document.bgcolor="red"</p>
    <p>The contents (or value) of a textbox named "password" in a form named "entryform" is document.entryform.password.value.</p>
  </div>
);

const methodsAndEvents = (
  <div className="aws-content-box">
    <h1> What are methods and events?</h1>
    <h2> Methods </h2>
    <p> Most objects have a certain collection of things that they can do. Different objects can do different things, just as a door can open and close, while a light can turn on and off. A new document is opened with the method document.open() You can write "Hello World" into a document by typing document.write("Hello World") . open() and write() are both methods of the object: document.</p>
    <h2> Events </h2>
    <p> Events are how we trigger our functions to run. The easiest example is a button, whose definition includes the words onClick="run_my_function()". The onClick event, as its name implies, will run the function when the user clicks on the button. Other events include OnMouseOver, OnMouseOut, OnFocus, OnBlur, OnLoad, and OnUnload.</p>
  </div>
);

const praticalExamples = (
  <div className="aws-content-box">
    <h1> Good, but... when hands-on starts?</h1>
  </div>
);

const whatAreVariables = (
  <div className="aws-content-box">
    <h1> Let's start with something simple... Just like <i>Variables</i> </h1>
    <p> In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are <b>undefined, null, boolean, string, symbol, number, and object.</b> </p>
  </div>
);

const variableExample = (
  <div className="aws-content-box larger">
    <img src={varImage} alt="declare_var_js" />
  </div>
);

const whatAreAttributions = (
  <div className="aws-content-box">
    <h1> Let me show you Assignment operator </h1>
    <p> In JavaScript, you can store a value in a variable with the assignment operator which is represented by "<b>=</b>". </p>
    <img src={assignImage} alt="assign_op_js" />
  </div>
);

const whatAreNumbers = (
  <div className="aws-content-box">
    <h1> Now, let's play with <i>numbers</i> </h1>
    <p> Number is a data type in JavaScript which represents numeric data. </p>
    <img src={numberImage} alt="assign_op_js" />
  </div>
);

const whatAreIncAndDec = (
  <div className="aws-content-box">
    <h1> What about increment and decrement? </h1>
    <p> We can increment and decrement, e.g add or subtract one, using these two operators:  </p>
    <img src={incDecImage} alt="assign_op_js" />
  </div>
);

const wantToKnowMore = (
  <div>
    <h1> Want to know <b>more and more</b> about Javascript? </h1>
    <p> You can start whenever you want with a bunch of different courses, check it out: </p>
    <ul>
      <li><i>Free Code Camp:</i> https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/</li>
      <li><i>Code Academy:</i> https://www.codecademy.com/learn/introduction-to-javascript</li>
    </ul>

  </div>
);


function App() {
  return (
    <AwesomeSlider className="aws-btn">
      <div>{whatIsJs}</div>
      <div>{jsObjectOriented}</div>
      <div>{jsObjectOrientedContinued}</div>
      <div>{objectsAndProps}</div>
      <div>{methodsAndEvents}</div>
      <div>{praticalExamples}</div>
      <div>{whatAreVariables}</div>
      <div>{variableExample}</div>
      <div>{whatAreAttributions}</div>
      <div>{whatAreNumbers}</div>
      <div>{whatAreIncAndDec}</div>
      <div>{wantToKnowMore}</div>
    </AwesomeSlider>
  );
}

export default App;
