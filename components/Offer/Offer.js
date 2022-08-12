import Image from "next/image";
import { GiNotebook } from "react-icons/gi";

const Offer = () => {
  return (
    <div className=" bg-white py-5">
      <div data-aos="fade-up" data-aos-duration="3000" className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className=" rounded-xl shadow-2xl"
            src="/Burger.png"
            width={550}
            height={450}
            alt="Burger"
          />
          <div>
            <h1 className="text-5xl text-gray-800 font-bold mb-6">Weekly Hot Deals!</h1>
            <p className=" text-2xl text-gray-800 font-bold">Thai Fried Chicken Burger</p>
            <p className=" text-xl font-semibold mb-3">
              Price: <span className=" text-red-500">$ 80</span>
            </p>
            <div>
              <h1 className=" text-2xl font-semibold text-red-500 mb-3">
                Ingredients
              </h1>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5">
                <div className="left_side">
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className="  text-gray-600  ml-2">20g Bulgur Wheat</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2 my-2">500g Lamb Mince</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2">1 TSP Cumin</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2 my-2">1 TSP Coriander</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className="  text-gray-600 ml-2">1 TSP Paprika</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2 my-2">
                      1 Clove Finely Chopped Garlic
                    </h1>
                  </div>
                </div>
                <div className="right_side">
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2">For Frying Olive Oil</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2 my-2">Freash 4 Bun</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2">Grated Cucumber</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2 my-2">150g Greek Yogurt</h1>
                  </div>
                  <div className=" flex  items-center">
                    <GiNotebook />
                    <h1 className=" text-gray-600  ml-2">2 Mint</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
