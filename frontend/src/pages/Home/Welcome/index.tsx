import { Fragment, useEffect } from "react";

import Hero from "./Hero";
import Usage from "./Usage";
import Footer from "../Footer";
import Features from "./Features";
import Testimonials from "./Testimonials";
import { GET } from "utils/axios";

type Props = {};

const Welcome = (props: Props) => {
  useEffect(() => {
    ping();
  }, []);

  const ping = () => {
    GET(`/`).then((res) => {
      console.log(res);
    });
  };

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
