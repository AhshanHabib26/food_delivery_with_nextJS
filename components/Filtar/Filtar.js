import Image from "next/image";

const data = [
  {
    id: "1",
    icon: "https://i.ibb.co/zn99KVm/italian-food.png",
    title: "Italian Food",
  },
  {
    id: "2",
    icon: "https://i.ibb.co/MZ8kSSg/ice-cream.png",
    title: "Dessert",
  },
  {
    id: "3",
    icon: "https://i.ibb.co/1GHZ0Zq/chinese-food.png",
    title: "Chinese Food",
  },
  {
    id: "4",
    icon: "https://i.ibb.co/tpM2x2W/salad.png",
    title: "Salad",
  },
  {
    id: "5",
    icon: "https://i.ibb.co/r38fmmW/vegetable.png",
    title: "Vegetable",
  },
  {
    id: "6",
    icon: "https://i.ibb.co/hW5tbT9/beef.png",
    title: "Raw Beaf",
  },
  {
    id: "7",
    icon: "https://i.ibb.co/f97Y9mZ/ramen.png",
    title: "Thai Food",
  },
  {
    id: "8",
    icon: "https://i.ibb.co/ss2FwVn/burger.png",
    title: "Burger",
  },
];

const Filtar = () => {
  return (
    <div id="features" className=" bg-white py-5">
      <h1 className=" text-3xl text-gray-800 text-center my-5 font-semibold ">
        Our Best Food Collection
      </h1>
      <div>
        <div className=" mx-5  grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 max-w-5xl lg:mx-auto">
          {data.map((curElm) => {
            return (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                key={curElm.id}
              >
                <div className="">
                  <div className="card card-side border p-4 cursor-pointer hover:scale-105 transition-all ease-in-out  hover:shadow-xl">
                    <figure>
                      <Image
                        src={curElm.icon}
                        width={60}
                        height={60}
                        alt="Food Icons"
                      />
                    </figure>
                    <div className=" flex items-center justify-evenly">
                      <h2 className=" text-xl font-semibold text-gray-800 ml-3">
                        {curElm.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filtar;
