import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from 'next/head'
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>

      <Head>
        <title>Best Mobile And Web Application Development Agency - Developers Lobby</title>
        <meta http-equiv="content-language" content="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="web development company, web development agency, software house, web agency, software solutions company" />
        <meta name="author" content="Muqeet Mughal" />
        <meta name="publisher" content="Muqeet Mughal" />
        <meta name="copyright" content="Muqeet Mughal" />
        <meta name="description" content="Developers Lobby is the best mobile and web application development agency providing its services globally. We provides the best solutions to your problems." />
        <meta name="page-topic" content="Media" />
        <meta name="page-type" content="Blogging" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://developerslobby.com/"/>
        <meta property="og:site_name" content="Developers Lobby"/>
        <meta property="og:updated_time" content="2022-09-10T10:15:16+00:00"/>
      </Head>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Projects />
        <Newsletter />
        <Team />
        <Pricing />
        <Testimonial />
        <Blog />
        <Quote />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
