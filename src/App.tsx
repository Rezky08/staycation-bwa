import React from 'react';
import {useRoutes} from "react-router-dom";
import routes from "routes";

function App() {
    // The useRoutes() hook allows you to define your routes as JavaScript objects
    // instead of <Routes> and <Route> elements. This is really just a style
    // preference for those who prefer to not use JSX for their routes config.
    let element = useRoutes(routes);

    return (
        <div className="App">
            {element}
        </div>
    );
}

export default App;
