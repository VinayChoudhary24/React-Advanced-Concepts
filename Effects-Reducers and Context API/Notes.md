# Side-Effects -- Http Requests --# Always Handling Side Effects with the useEffect() Hook 
               --Store Data in Browser Storage, Send Http Request to Backend Servers, Set and manage Timers.
               --These Tasks Must Happen Outside of the Component Evaluations
               --The useEffect Dependency [] 
                                  -- We Should Not include State Updating Functions i.e setFormIsValid
                                  -- We DON'T need to Add "built-in" API's or Functions i.e fetch() & localStorage 
               
               --useEffect( () => {
                <!-- This useEffect function is without any Empty [] or Dependency  -->
                # This Effect Will Run on every render and initialization / Mount of Component. 
               });
               
               --useEffect( () => {
                <!-- This useEffect function is with any Empty []  -->
                # This Effect Will Run only on First Render / initialization / Mount and will NEVER run again. 
               }, []);

               --useEffect( () => {
                <!-- This useEffect function is with Dependency [x]  -->
                # This Effect Will Run on First Render / initialization / Mount and will run again when the Dependency[x] Changes. 
               }, [x]);

               --useEffect( () => {
                <!-- This useEffect function is with Dependency [x] and Clean up Function  -->
                # This Effect Will Run on First Render / initialization / Mount and will run again when the Dependency[x] Changes, but the Clean Up Function will not run for First Render.

                <!-- Clean up Function -->
                return () => {
                    # This Clean up Code will not run on the First Render / Initialize / Mount but for the Subsequent Renders / Mounts the clean up code will Run Always before the the Dependency[x] Code. 
                };
               }, [x])

# useReducer -- Manage Complex State in Components With reducers.
              --useReducer() can be used as a REPLACEMENT for useState() if we need "MORE POWERFUL STATE MANAGEMENT".

              -- useReducer() Hook
                     --const [state, dispatchFn] = useReducer( reducerFn, initialState, initFn);
                        #State -- The State snapshot of Component.
                        #dispatchFn -- function to Dispatch a New Action to UPDATE the state.

                        #reducerFn -- (prevState, action) => newState -- Function that is Triggered Automatically once an action is    Dispatched (via dispatchFn()) -- it Receives the Latest State and returns Updated State

                        #initialState -- 

# Context API -- Managing App-Wide or Component-Wide State with Context API, Which is Built-in React to Make Sharing State and Update State Across Components.
              -- In BIGGER Apps we Avoid Props-Drilling / Props-Chaining.
              -- Passing the Data / Props to Only Components That require that Data with Context API.

              -- Directly Passing State from Any Component to Other Components without Building Props-Chain.

              --# context.Provider -- Wrap All the Components which Require the context. *Global level

              --# useContext Hook -- Inside the particular Component where the Context needs to be Consumed.
                                                      OR
              --# context.Consumer -- Inside the particular Component where the Context needs to be Consumed.