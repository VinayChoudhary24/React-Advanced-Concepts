import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  // First Way -- 
  const [enteredName, setEnteredName] = useState('');

  // Second Way --
  const nameInputRef = useRef();

  // State for Fields Touched
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // The Overall Form Validation
  // const [formIsValid, setFormIsValid] = useState(false);
  let formIsValid = false;

  // Name Validation -- Setting entered Name NOT Equal to EMPTY STRING
  const enteredNameIsValid = enteredName.trim() !== '';
   // To Check if the User Has Touched the Input
   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //  Overall Form Validation
    // will Contain all the Dependencies
    if (enteredNameIsValid) {
      // All the Inputs are Valid
      formIsValid = true;
    }

  //// First Way -- Input Handler
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  // When the Input Loses Focus
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = event => {
    // Check if the User has Touched the Inputs
    setEnteredNameTouched(true);

    // / First Way -- 
    event.preventDefault();

    // The Validation -- Checking if Entered Name Input is EMPTY
    if(!enteredNameIsValid) {
      return;
    }
    // console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);

    //  // Second Way -- Access the Value
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = '';
  };

  // To Show the Red Box if invalid -- use CSS inValid Class
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control' ;
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* // First Way --  With Input Handlaer */}
        <input 
        type='text' id='name' value={enteredName} 
        onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {/* Show the Validation error Message */}
        { nameInputIsInvalid && <p>Enter Valid Name</p> }

        {/* // First Way --  Without Input Handler */}
        {/* <input type='text' id='name' value={enteredName} onChange={setEnteredName( e => e.target.value )} /> */}

        {/* // Second Way -- using ref */}
        {/* <input type='text' id='name' ref={nameInputRef} /> */}

      </div>
      <div className="form-actions">
        {/* Disable the Button when Form is NOT Valid */}
        {/* For This we Need to Addd CSS i.e  */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
