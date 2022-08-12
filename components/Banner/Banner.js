import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-green-100">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-body mt-10">
            <h2 className=" text-4xl lg:text-6xl font-extrabold">
              Your Favorite Food, <br /> Delivered Your Home
            </h2>
            <p className=" flex-grow-0 text-lg lg:text-xl opacity-70">
              Food, Drinks, Medicine, Groceries Available For Delivery
            </p>
            <div className=" flex items-center mt-10">
              <input
                type="text"
                placeholder="Enter Your Email, We Contact You!"
                className="input input-bordered outline-0 rounded-l-md rounded-none w-full max-w-xs"
              />
              <button className="btn rounded-r-md rounded-none bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className="card">
          <div className="card-body">
            <Image
            className=" min-w-fitt"
              width={400}
              height={450}
              alt="Banner"
              src="/FoodBanner.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
