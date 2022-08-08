import Banner from "../components/Banner/Banner";
import Delivery from "../components/Delivery/Delivery";
import Filtar from "../components/Filtar/Filtar";
import Food from "../components/Food/Food";
import GetOffer from "../components/GetOffer/GetOffer";
import Navbar from "../components/Navbar/Navbar";
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
      <GetOffer/>
    </div>
  );
}
