import React from 'react';

import varImage from '../images/var-js.png';
import numberImage from '../images/numbers-js.png';
import assignImage from '../images/assign-js.png';
import incDecImage from '../images/inc-dec-js.png';

import { jsMainImage } from './Shared';

export const praticalExamples = (
    <div className="aws-content-box">
      <h1> Good, but... when hands-on starts?</h1>
      {jsMainImage}
    </div>
  );
  
export const whatAreVariables = (
    <div className="aws-content-box">
      <h1> Let's start with something simple... Just like <i>Variables</i> </h1>
      <p> In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are <b>undefined, null, boolean, string, symbol, number, and object.</b> </p>
      {jsMainImage}
    </div>
  );
  
export const variableExample = (
    <div className="aws-content-box larger">
      <img src={varImage} alt="declare_var_js" />
      {jsMainImage}
    </div>
  );
  
export const whatAreAttributions = (
    <div className="aws-content-box">
      <h1> Let me show you Assignment operator </h1>
      <p> In JavaScript, you can store a value in a variable with the assignment operator which is represented by "<b>=</b>". </p>
      <img src={assignImage} alt="assign_op_js" />
      {jsMainImage}
    </div>
  );
  
export const whatAreNumbers = (
    <div className="aws-content-box">
      <h1> Now, let's play with <i>numbers</i> </h1>
      <p> Number is a data type in JavaScript which represents numeric data. </p>
      <img src={numberImage} alt="assign_op_js" />
      {jsMainImage}
    </div>
  );
  
export const whatAreIncAndDec = (
    <div className="aws-content-box">
      <h1> What about increment and decrement? </h1>
      <p> We can increment and decrement, e.g add or subtract one, using these two operators:  </p>
      <img src={incDecImage} alt="assign_op_js" />
      {jsMainImage}
    </div>
  );
  
export const wantToKnowMore = (
    <div className="aws-content-box">
      <h1> Want to know <b>more and more</b> about Javascript? </h1>
      <p> You can start whenever you want with a bunch of different courses, check it out: </p>
      <ul>
        <li><i>Free Code Camp:</i> <br/> https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/</li>
        <li><i>Code Academy:</i> <br/> https://www.codecademy.com/learn/introduction-to-javascript</li>
      </ul>
      {jsMainImage}
    </div>
  );