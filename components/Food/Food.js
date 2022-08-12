import Image from "next/image";
import Styles from "../../styles/Food.module.css";
import { BiRightArrowAlt } from "react-icons/bi";

const data = [
  {
    id: "1",
    image: "https://i.ibb.co/DGLRzDy/Food-1.png",
    title: "Diced Chicken",
    price: "120",
  },
  {
    id: "2",
    image: "https://i.ibb.co/dr1cRP5/Food-2.png",
    title: "Four Treasure Mushroom",
    price: "80",
  },
  {
    id: "3",
    image: "https://i.ibb.co/HqJpHhp/Food-3.png",
    title: "Honey Glazed Ginger Chicken",
    price: "90",
  },
  {
    id: "4",
    image: "https://i.ibb.co/cks5wph/Food-4.png",
    title: "Hubei Vegetable",
    price: "80",
  },
  {
    id: "5",
    image: "https://i.ibb.co/0y9XPMx/Food-5.png",
    title: "Teriyaki Chicken Noodles",
    price: "180",
  },
  {
    id: "6",
    image: "https://i.ibb.co/N995tmd/Food-6.png",
    title: "Tempt Asia Special Salad",
    price: "120",
  },
];

const Food = () => {
  return (
    <div id="resturents" className=" bg-gray-50">
      <h1 className=" text-3xl text-gray-800 text-center my-10 font-semibold">
        Available Food Nearby Area
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-4 lg:mx-auto">
        {data.map((food) => {
          return (
            <>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                key={food.id}
                className={`card cursor-pointer rounded-none card-compact `}
              >
                <figure className={`relative  ${Styles.ImageContainer}`}>
                  <Image
                    className=" hover:opacity-40 hover:scale-105 transition-all ease-in-out"
                    src={food.image}
                    width={400}
                    height={250}
                    alt="Food"
                  />
                  <p className={Styles.FoodPrice}>Price : ${food.price}</p>
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {food.title}
                  </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className=" cursor-pointer my-8 flex  items-center justify-center bg-slate-800 w-[180px] h-[55px] mx-auto rounded-full ">
        <h1 className=" text-white">Explore More</h1>
        <p className=" ml-2">
          <BiRightArrowAlt size="22" color="#fff" />
        </p>
      </div>
    </div>
  );
};

export default Food;
