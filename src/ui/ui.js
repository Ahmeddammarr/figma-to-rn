import * as React from "react";
import { render } from "react-dom";
function App() {
    var _a = React.useState(), generatedCode = _a[0], setgeneratedCode = _a[1];
    React.useEffect(function () {
        onmessage = function (event) {
            console.log('event', event);
            setgeneratedCode(event);
        };
    }, []);
    return React.createElement("div", null, generatedCode);
}
render(React.createElement(App, null), document.getElementById("app"));
