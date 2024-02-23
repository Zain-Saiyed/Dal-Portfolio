import { Route, Routes } from "react-router-dom";

import {
  ContactUsPage,
  FAQPage,
  HomePage,
  NotFoundPage,
} from "routes/components";
import { PublicLayout } from "layout";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
