import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/ui.css";
import "./features/booking/booking.css";

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
