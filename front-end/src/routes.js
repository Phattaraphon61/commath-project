import React from 'react';
import Page1 from "./viws/Page1"
import Page2 from "./viws/Page2"

const routes = [
    {
        path:"/",
        element:<Page1/>,
    },
    {
        path:"/commath-project",
        element:<Page1/>,
    },
    {
        path:"/page2",
        element:<Page2/>,
    },
    
    
]
export default routes;