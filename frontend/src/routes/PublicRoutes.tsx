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
  SearchPage,
  SignUpPage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  EmailVerificationPage,
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
        <Route path="/search-page" element={<SearchPage />} />
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
        <Route
          path="/profile/portfolio/:portfolioId/edit"
          element={<CreatePortfolioPage />}
        />
<<<<<<< HEAD
        <Route path="/portfolio/:user_name" element={<PortfolioPage />} />
        <Route
          path="/portfolio/:user_name/project/:project_id"
          element={<ProjectPage />}
        />
        <Route
          path="/portfolio/:user_name/project/:project_id"
          element={<ProjectPage />}
        />
=======
>>>>>>> 9cb1521203953849b59ad8f99f2c550f39f9b154
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:username/:resetToken" element={<ResetPasswordPage />} />
        <Route path="/verify-email/:username/:verificationCode" element={<EmailVerificationPage />} />

    
      </Route>
      <Route path="/portfolio/:portfolio_id" element={<PortfolioPage />} />
      <Route path="/portfolio/:portfolio_id/project/:project_id" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
