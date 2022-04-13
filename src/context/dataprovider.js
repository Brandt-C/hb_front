import { createContext, useState } from "react";

const DataProvider = props => {
    const [user, setUser] = useState({});

    return (
        <DataContext.Provider value={{'user':user, 'setUser':setUser}}>
           
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export let DataContext = createContext();