import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import { praticalExamples, whatAreVariables, variableExample, whatAreAttributions, whatAreNumbers, whatAreIncAndDec, wantToKnowMore } from './components/Example';
import { whatIsJs, jsObjectOriented, jsObjectOrientedContinued, objectsAndProps, methodsAndEvents } from './components/Intro';


import 'react-awesome-slider/dist/styles.css';
import './App.scss';

const startupScreen = (
  <div className="aws-startup-screen" />
);

function App() {
  return (
    <AwesomeSlider className="aws-btn" startupScreen={startupScreen}>
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
