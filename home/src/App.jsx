import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";  // Import Footer

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen"> {/* Flex layout for the whole page */}
      <Header hideLink={['home']}/>
      <div className="flex-grow mt-10 text-3xl mx-auto max-w-6xl">
        <div>{'Framework:'}</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
      </div>
      <Footer /> {/* Footer will be placed at the bottom */}
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
