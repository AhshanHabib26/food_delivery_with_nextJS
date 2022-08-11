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

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
