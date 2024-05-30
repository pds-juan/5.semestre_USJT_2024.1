import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// npm i primereact primeicons primeflex
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'

ReactDOM.render(
    <App />,
    document.querySelector('root')
)