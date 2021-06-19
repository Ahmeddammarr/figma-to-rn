import * as React from "react";
import { render } from "react-dom";

function App() {
  const [generatedCode, setgeneratedCode] = React.useState<any>();
  parent.postMessage({pluginMessage:'20'},'*')
  React.useEffect(() => {
    onmessage = (event) => {
      setgeneratedCode(event.data.pluginMessage);
    };
   
  }, []);
  return <div>{generatedCode}</div>;
}

render(<App />, document.getElementById("app"));
