import React from "react";
import MiniDrawer from "./views/Main";
import Number1 from "./views/Page1";
import Number2 from "./views/Page2";
import Number3 from "./views/Page3";
import Number4 from "./views/Page4";
import Number5 from "./views/Page5";
import Number6 from "./views/Page6";

const routes = [
    {
      path: "/",
      element: <MiniDrawer />,
    },
    {
      path: "commath-project",
      element: <MiniDrawer />,
    },
    {
      path: "Number1",
      element: <Number1 />,
    },
    {
      path: "Number2",
      element: <Number2 />,
    },
    {
      path: "Number3",
      element: <Number3 />,
    },
    {
      path: "Number4",
      element: <Number4 />,
    },
    {
      path: "Number5",
      element: <Number5 />,
    },
    {
      path: "Number6",
      element: <Number6 />,
    },
  ];

export default routes;