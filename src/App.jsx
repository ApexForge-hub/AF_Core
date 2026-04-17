import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Home from "./componenet/Home";
import Services from "./componenet/Services";
import About from "./componenet/About";
import CaseStudies from "./componenet/CaseStudies";
import Contact from "./componenet/Contact";
import Blog from "./componenet/Blog";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: (
      <>
        
        <Services />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        
        <About />
      </>
    ),
  },
  {
    path: "/case-studies",
    element: (
      <>
        
        <CaseStudies />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        
        <Blog />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
       
        <Contact />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
