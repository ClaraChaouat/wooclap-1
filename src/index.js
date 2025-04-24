import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import useSlideController from "./hooks/useSlideController";

function AppWithLogic() {
  const controller = useSlideController();
  return <App {...controller} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWithLogic />
  </React.StrictMode>
);
