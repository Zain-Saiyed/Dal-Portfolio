import { Route, Routes } from "react-router-dom";
import DiscussionForumPage from "pages/DiscussionForum/DiscussionForumPage";
import DiscussionThread from "pages/DiscussionForum/DiscussionThreadPage";
import { MyProjects, MyCollabRequests } from "pages/Collaboration";

import {
  FAQPage,
  HomePage,
  ProfilePage,
  AboutUsPage,
  NotFoundPage,
  ContactUsPage,
  CreatePortfolioPage,
  PortfolioPage,
  ProjectPage,
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

        <Route
          path="/dalportfolios-discussions"
          element={<DiscussionForumPage />}
        />
        <Route
          path="/dalportfolios-discussion-thread"
          element={<DiscussionThread />}
        />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-collab-requests" element={<MyCollabRequests />} />

        <Route
          path="/dalportfolios-discussions"
          element={<DiscussionForumPage />}
        />
        <Route
          path="/dalportfolios-discussion-thread"
          element={<DiscussionThread />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/profile/portfolio/create"
          element={<CreatePortfolioPage />}
        />
        <Route path="/portfolio/:user_name" element={<PortfolioPage />} />
        <Route
          path="/portfolio/:user_name/project/:project_id"
          element={<ProjectPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
