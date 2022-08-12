import Styles from "../../styles/WeCare.module.css";

const WeCare = () => {
  return (
    <div className=" py-20">
      <div className={Styles.WcContainer}>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" py-24 text-center font-extrabold text-6xl  mx-4 lg:mx-0 lg:text-6xl text-red-400"
        >
          Sit at Home, <span className=" text-white">We Will Take Care</span>
        </h1>
      </div>
    </div>
  );
};

export default WeCare;
