import { createContext } from "react";

export const Context = createContext(null);

const StoreContextProvider = (props)=>{
    const contextValue = {

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default StoreContextProvider;
