import { Fragment } from "react";

import Hero from "./Hero";
import Usage from "./Usage";
import Footer from "../Footer";
import Features from "./Features";
import Testimonials from "./Testimonials";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Usage />
      <Features />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Welcome;
