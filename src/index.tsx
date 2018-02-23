import * as React from "react";
import * as ReactDOM from "react-dom";
import * as App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App.Main />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
