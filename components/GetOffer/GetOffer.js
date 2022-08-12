import Styles from "../../styles/GetOffer.module.css";

const GetOffer = () => {
  return (
    <div className="">
      <div className={Styles.GetOfferContainer}>
        <div className=" py-28 text-center">
          <h1 className=" select-none text-2xl lg:text-5xl font-semibold mb-2 text-white">Stay Informed About Special Offers</h1>
          <p className=" select-none text-md lg:text-2xl text-white mb-8">For Exclusive Deals, Coupons, News and More!</p>
          <div className=" flex items-center justify-center mx-5">
            <input placeholder="Enter Your Email Address" className=" input rounded-none max-w-lg  rounded-l-lg w-full input-bordered" type="email" name="" id="" />
            <button className="btn rounded-r-lg rounded-none" type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOffer;
