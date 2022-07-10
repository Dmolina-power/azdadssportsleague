import React from "react";
import Tabs from "./components/Breadcrumbs";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import ProductValues from "./components/Section";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Questions from "./components/Questions";
import Footer from "../../Components/Footer";

const baseball = (props) => {
  return (
    <>
      <Container maxWidth="sm">
        <Tabs />
      </Container>
      <Hero />
      <ProductValues />
      <Gallery />
      <HowItWorks />
      <Questions/>
      <Footer/>
    </>
  );
};

export default baseball;
