import React, { useState } from "react";

import NumberButton from './NumberButton';

import { numbers } from '../../../data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
const [numberKey, setNumberKey] = useState(numbers);
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState(0);
  console.log(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    {
      numberKey.map((number) => {
        return <NumberButton key={number} calcNumbers={number} />
      })
    }
     
    </div>
  );
};
export default Numbers;