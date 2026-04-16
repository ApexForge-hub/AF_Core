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
    element: <HomePage />,
  },
  {
    path: "/services",
    element: (
      <>
        <HomePage />
        <Services />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <HomePage />
        <About />
      </>
    ),
  },
  {
    path: "/case-studies",
    element: (
      <>
        <HomePage />
        <CaseStudies />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <HomePage />
        <Blog />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <HomePage />
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
