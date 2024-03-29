import React from "react";

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "pages/Home").then((module) => ({
    default: module.Welcome,
  }))
);

const ContactUsPage = React.lazy(() =>
  import(/* webpackChunkName: "ContactUs" */ "pages/Home").then((module) => ({
    default: module.ContactUs,
  }))
);

const AboutUsPage = React.lazy(() =>
  import(/* webpackChunkName: "AboutUs" */ "pages/Home").then((module) => ({
    default: module.AboutUs,
  }))
);

const FAQPage = React.lazy(() =>
  import(/* webpackChunkName: "FAQ" */ "pages/Home").then((module) => ({
    default: module.FAQ,
  }))
);

const ProfilePage = React.lazy(() =>
  import(/* webpackChunkName: "Profile" */ "pages/Profile").then((module) => ({
    default: module.default,
  }))
);

const PortfolioPage = React.lazy(() =>
  import(/* webpackChunkName: "Portfolio" */ "pages/Portfolio/").then((module) => ({
    default: module.Portfolio,
  }))
);

const ProjectPage = React.lazy(() =>
  import(/* webpackChunkName: "Project" */ "pages/Portfolio/").then((module) => ({
    default: module.Project,
  }))
);

const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ "pages/NotFound").then(
    (module) => ({
      default: module.default,
    })
  )
);

export { HomePage, ContactUsPage, FAQPage, NotFoundPage, AboutUsPage, ProfilePage, PortfolioPage, ProjectPage };
