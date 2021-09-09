import React from "react";

// object that contains component
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;