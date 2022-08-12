import { FiPhoneCall } from "react-icons/fi";
import Styles from "../../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className=" bg-white py-10">
      <div
        className={`mx-3  py-8 max-w-4xl rounded-xl lg:mx-auto ${Styles.ContactContainer}`}
      >
        <div className=" flex items-center justify-around flex-col lg:flex-row">
          <div className=" flex items-center flex-col lg:flex-row">
            <FiPhoneCall color="#fff" size="32" />
            <div className=" text-white lg:ml-3 text-center lg:text-left ">
              <span className=" text-lg font-semibold">Call Us</span>
              <h1 className=" text-2xl font-extrabold">To Make Order Now</h1>
            </div>
          </div>
          <div className="">
            <h1 className="text-white text-xl font-bold">(+880)1646418365</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
