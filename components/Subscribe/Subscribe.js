import { FaEnvelopeOpenText } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className=" bg-gray-800 py-20">
      <div data-aos="fade-up" data-aos-duration="3000" className=" flex items-center justify-around  flex-col lg:flex-row">
        <div className=" flex items-center justify-between flex-col lg:flex-row text-center lg:text-left mb-6 lg:mb-0">
          <FaEnvelopeOpenText color="#fff" size="52" />
          <div className=" text-white ml-4">
            <span className=" text-gray-300 text-lg">Get the latest news and offers</span>
            <h1 className=" text-3xl font-extrabold">Subscribe To Our Newsletter</h1>
          </div>
        </div>
        <div>
          <input placeholder="Enter Email" className=" bg-white input rounded-none rounded-l-lg w-[220px] lg:w-[280px]" type="email" name="" id="" />
          <button className=" btn btn-error text-white capitalize rounded-none rounded-r-lg" type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
