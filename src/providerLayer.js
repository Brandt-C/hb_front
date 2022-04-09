import App from "./App";
import DataProvider from "./context/dataprovider";

const ProviderLayer = () => {
    return(
        <DataProvider>
            <App />
        </DataProvider>
        
    )
}
export default ProviderLayer;