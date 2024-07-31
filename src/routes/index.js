import Home from "../pages/Home";
import Company from "../pages/Company";
import Service from "../pages/Service";
import Career from "../pages/Career";
import Blog from "../pages/Blog";
import BlogDescription from "../pages/BlogDescription";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import FAQ from "../pages/FAQs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/company", element: <Company /> },
  { path: "/service", element: <Service /> },
  { path: "/career", element: <Career /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blogdescription", element: <BlogDescription /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/faqs", element: <FAQ /> },
];

export default routes;
