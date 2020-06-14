import React from "react";
import "./Home.scss";
import { Header } from "../header";
import { MainCarousel } from "../main-carousel";
import { Footer } from "../footer";
import { WhyUs } from "../why-us";
import { ProductList } from "../product-list";
import { InformationBlock } from "../information-block";
import { BlogList } from "../blog-list";
import { ClientsTestimonialsCarousel } from "../clients-testimonials-carousel";
import { GameCarousel } from "../game-carousel";

const Home = () => (
  <div className="center">

    <Header />
    <MainCarousel />
    <ProductList />

    <InformationBlock />

    <GameCarousel />

    <ClientsTestimonialsCarousel />

    <BlogList />

    <WhyUs />

    <Footer />
  </div>
);

export default Home;
