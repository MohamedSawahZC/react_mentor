import { useContext } from "react";
import {UseContextProvider} from "./components/UseContextExample";
import { ColorContext } from "./components/UseContextExample";
const App = () => {
    const data = useContext(ColorContext);

    return (
        <div>
           <UseContextProvider/>
            {data}
        </div>
    )
}


export default App;