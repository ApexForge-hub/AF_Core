import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./HomePage";
import Services from "./componenet/Services";
import About from "./componenet/About";
import CaseStudies from "./componenet/CaseStudies";
import Contact from "./componenet/Contact";
import Blog from "./componenet/Blog";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
