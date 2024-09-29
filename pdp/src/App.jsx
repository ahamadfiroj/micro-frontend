import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SafeComponent from "./SafeCompnent";
import './index.scss'
import { loadTailwindStyles } from "./Utils";

// import Header from "home/Header";
// import Footer from "home/Footer";

// Use React.lazy to load the components dynamically
const Header = lazy(() => import("home/Header"));
const Footer = lazy(() => import("home/Footer"));


const App = () => {
  useEffect(()=>{
    loadTailwindStyles()
  }, [])
  return <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <SafeComponent>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      </SafeComponent>
      <div className="flex-grow mt-10 text-3xl mx-auto max-w-6xl">
        <div>Framework: React</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
      </div>
      <SafeComponent>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </SafeComponent>
    </div>
  </BrowserRouter>
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
