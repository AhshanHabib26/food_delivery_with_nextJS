import Styles from "../../styles/WeCare.module.css";

const WeCare = () => {
  return (
    <div className=" my-20">
      <div className={Styles.WcContainer}>
        <h1 className=" py-36 text-center font-extrabold text-4xl mx-4 lg:mx-0 lg:text-6xl text-red-400">
          Sit at Home, <span className=" text-white">We Will Take Care</span>
        </h1>
      </div>
    </div>
  );
};

export default WeCare;
