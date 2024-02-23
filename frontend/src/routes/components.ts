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

const FAQPage = React.lazy(() =>
  import(/* webpackChunkName: "FAQ" */ "pages/Home").then((module) => ({
    default: module.FAQ,
  }))
);

const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ "pages/NotFound").then(
    (module) => ({
      default: module.default,
    })
  )
);

export { HomePage, ContactUsPage, FAQPage, NotFoundPage };
