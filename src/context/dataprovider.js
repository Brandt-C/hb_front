import { createContext, useState } from "react";

const DataProvider = props => {
    const state = useState("");

    return (
        <DataContext.Provider value={state}>
           
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export let DataContext = createContext();