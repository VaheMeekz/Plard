import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./Redux/Reducers";
import {BrowserRouter} from "react-router-dom";
import {ItemProvider} from "./Providers/ItemProvider";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <ItemProvider>
                    <App/>
                </ItemProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
