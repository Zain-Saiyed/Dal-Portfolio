import { Route, Routes } from "react-router-dom";

import {
  FAQPage,
  HomePage,
  AboutUsPage,
  NotFoundPage,
  ContactUsPage,
  PortfolioPage,
  ProjectPage
} from "routes/components";
import { PublicLayout } from "layout";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/portfolio/:user_name" element={<PortfolioPage />} />
        <Route path="/portfolio/:user_name/project/:project_id" element={<ProjectPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
