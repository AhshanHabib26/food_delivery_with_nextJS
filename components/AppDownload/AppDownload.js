import Image from "next/image";
import {FaGooglePlay} from 'react-icons/fa'
import {BsApple} from 'react-icons/bs'

const AppDownload = () => {
  return (
    <div id="our_apps" className=" max-w-5xl mx-auto px-4 lg:px-0 my-5">
      <div className="card lg:card-side">
        <figure data-aos="fade-right" data-aos-duration="2000">
          <Image src="/Order.png" width={450} height={450} alt="Food" />
        </figure>
        <div data-aos="fade-left" data-aos-duration="2000" className="card-body">
          <h2 className=" text-2xl lg:text-4xl font-semibold">
            Get More With <span className=" text-red-500">Our Application</span>
          </h2>
          <p className=" flex-grow-0">
            Connecting With our iOS & Android apps. Download from iTune & Play
            store
          </p>
          <div>
            <div>
              <ul className="steps steps-vertical">
                <li className="step step-neutral font-semibold">Follow Delivery Status </li>
                <li className="step step-neutral font-semibold">Order From Any Location</li>
                <li className="step step-neutral font-semibold">Get Important Updates</li>
              </ul>
            </div>
          </div>
          <div className=" flex items-center justify-evenly">
            <div className=" btn w-[190px] h-[60px] flex items-center">
                <FaGooglePlay color="#fff" size="25"/>
                <div className="ml-2">
                    <span className="text-[14px]  capitalize">Download on The</span>
                    <h1 className=" text-xl capitalize">Google Play</h1>
                </div>
            </div>
            <div className="btn w-[190px] h-[60px] flex items-center">
              <BsApple size="25" color="#fff"/>
                <div className="ml-2">
                    <span className="text-[14px]  capitalize">Download on The</span>
                    <h1 className=" text-xl capitalize">Apple Store</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
