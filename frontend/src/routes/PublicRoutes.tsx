import { Route, Routes } from "react-router-dom";
import DiscussionForumPage from "pages/DiscussionForum/DiscussionForumPage";
import DiscussionThread from "pages/DiscussionForum/DiscussionThreadPage";

import {
  FAQPage,
  HomePage,
  AboutUsPage,
  NotFoundPage,
  ContactUsPage,
  ProfilePage,
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
        <Route path="/dalportfolios-discussions" element={<DiscussionForumPage  />} />
        <Route path="/dalportfolios-discussion-thread" element={<DiscussionThread />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
