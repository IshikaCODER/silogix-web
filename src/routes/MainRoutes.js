import { lazy } from "react";
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";


// Pages
const HomePage = Loadable(
    lazy(() => import("pages/Home"))
);
const CompanyPage = Loadable(
    lazy(() => import("pages/Company"))
);
const ServicePage = Loadable(
    lazy(() => import("pages/Service"))
);
const CareerPage = Loadable(
    lazy(() => import("pages/Career"))
);
const BlogPage = Loadable(
    lazy(() => import("pages/Blog"))
);
const BlogDescription = Loadable(
    lazy(() => import("pages/BlogDescription"))
);
const ContactPage = Loadable(
    lazy(() => import("pages/Contact"))
);
const PrivacyPolicy = Loadable(
    lazy(() => import("pages/Privacy"))
);
const TermsConditions = Loadable(
    lazy(() => import("pages/Terms"))
);
const FAQs = Loadable(
    lazy(() => import("pages/FAQs"))
);


// Routing Pages
const MainRoutes = {
    path: "",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "company",
            element: <CompanyPage />,
        },
        {
            path: "service",
            element: <ServicePage />,
        },
        {
            path: "career",
            element: <CareerPage />,
        },
        {
            path: "blog",
            element: <BlogPage />,
        },
        {
            path: "blogdescription",
            element: <BlogDescription />,
        },
        {
            path: "contact",
            element: <ContactPage />,
        },
        {
            path: "privacy",
            element: <PrivacyPolicy />,
        },
        {
            path: "terms",
            element: <TermsConditions />,
        },
        {
            path: "faqs",
            element: <FAQs />,
        }
    ]
};

export default MainRoutes;
