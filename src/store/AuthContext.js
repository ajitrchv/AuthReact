import React,{ useState }from "react";

const AuthContext = React.createContext({

    token: '',
    isLoggedIn: false,
    login:(token) => {},
    logout: () => {}

});
 export const AuthContextProvider = (props) => {

    const [token, setToken] = useState();
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        
        setToken(token);
    }
    const logOutHandler = async() => {
        
        setToken(null);

    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logOutHandler,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

 }
 export default AuthContext;