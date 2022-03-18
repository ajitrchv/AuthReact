import React,{ useState }from "react";

const AuthContext = React.createContext({

    token: '',
    isLoggedIn: false,
    login:(token) => {},
    logout: () => {}

});
 export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token'); //following codes set an initial tokrn frm last set
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        
        setToken(token);
        localStorage.setItem('token', token); //cookies like stuff, storing data locally
        
    }
    const logOutHandler = async() => {
        
        setToken(null);
        localStorage.removeItem('token'); //clears only 'token'

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