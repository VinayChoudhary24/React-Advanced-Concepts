## Working with Values, Validation and State

 # There are TWO ways for Handling INPUTS i.e useState OR useRef.

 # We Should Always Maintain Overall FORM Validation -- const [formIsValid, setFormIsValid] = useState(false);
              -- With The Help of useEffect( () => {})

    # DISABLE Button when Form is Invalid
        {/* For This we Need to Addd CSS i.e  */}
                 button:disabled,
                 button:disabled:hover,
                 button:disabled:active {
                    background-color: ####;
                    color: #####;
                    border: #ccc;
                    cursor: not-allowed;
                 } 