<!-- OPTIONS for HTTP REQUESTS -->
# 1 -- AXIOS -- Package to SEND and HANDLE RESPONSE in Browsers.

# 2 -- FETCH API -- Built-In Mechanism in JS, allows to SEND and HANDLE RESPONSE in Browsers.

   ## There are TWO Ways to Send and Handle Http Requests i.e .then() && async-await
                   1 - fetch('', {}).then().then().catch()
                   2 - async function FnName() {
                    const response = await fetch('', {});
                    const data = await response.json();
                   } 

# Sending GET Request -- 

# Adding Loading Spinner

# Handling Http Errors -- With async and await we Use try{} catch (error) to Handle Errors.

# Fetching Data with useEffect() and useCallback() -- When we want to fetch the Data IMMEDIATELY on Component Initialization without User Doing Any Request for Data