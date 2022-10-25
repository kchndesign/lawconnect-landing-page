import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage";
import "./css/styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);
