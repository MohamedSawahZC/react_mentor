import { useContext } from "react";
import {UseContextProvider} from "./components/UseContextExample";
import { ColorContext } from "./components/UseContextExample";
import UseRefExample from "./components/UseRefExample";
const App = () => {
    const {data} = useContext(ColorContext);
    
    return (
        <div>
           <UseContextProvider/>
            {data}
            <UseRefExample  />
        </div>
    )
}


export default App;