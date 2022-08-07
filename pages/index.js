import Banner from "../components/Banner/Banner";
import Filtar from "../components/Filtar/Filtar";
import Food from "../components/Food/Food";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return <div>
    <Navbar/>
    <Banner/>
    <Food/>
    <Filtar/>
  </div>;
}
