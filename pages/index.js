import Head from "next/head";
import AppDownload from "../components/AppDownload/AppDownload";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import ContactUs from "../components/ContactUs/ContactUs";
import Delivery from "../components/Delivery/Delivery";
import Filtar from "../components/Filtar/Filtar";
import Food from "../components/Food/Food";
import Footer from "../components/Footer/Footer";
import GetOffer from "../components/GetOffer/GetOffer";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer/Offer";
import Review from "../components/Review/Review";
import Subscribe from "../components/Subscribe/Subscribe";
import WeCare from "../components/WeCare/WeCare";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Delivery | Ahshan Habib</title>
      </Head>

      <Navbar />
      <Banner />
      <Food />
      <Filtar />
      <WeCare />
      <Delivery />
      <GetOffer />
      <Offer />
      <Review />
      <AppDownload />
      <Subscribe />
      <Blog />
      <ContactUs />
      <Footer />
      <ScrollToTop
        smooth
        color="#fff"
        height="18"
        style={{ backgroundColor: "#1F2937", paddingLeft: 5 }}
      />
    </div>
  );
}
