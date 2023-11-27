import React from 'react';

const UserContext = React.createContext(null);


export const useData = () => {
    const context = React.useContext(UserContext);
    if (!context) throw new Error("useData precisa estar em UserContextProvider");
    return context;
}


export const UserContextProvider = ({children}) => {

    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}