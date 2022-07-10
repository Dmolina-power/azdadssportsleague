import React from "react";
import Tabs from "../../Components/Breadcrumbs";
import Container from "@mui/material/Container";
import Hero from "../../Components/Hero";
import ProductValues from "../../Components/Section";
import Gallery from "../../Components/Gallery";
import HowItWorks from "../../Components/HowItWorks";
import Questions from "../../Components/Questions";
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
