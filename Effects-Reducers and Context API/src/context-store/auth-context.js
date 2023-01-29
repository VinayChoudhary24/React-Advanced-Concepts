import React from 'react';

// Context object
const AuthContext = React.createContext({
    // We Provide all the Props / Values here to be Used App-Wide 
    isLogggedIn: false,
    onLogout: () => {},
});

export default AuthContext;