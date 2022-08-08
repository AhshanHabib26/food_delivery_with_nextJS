import Image from "next/image";

const Delivery = () => {
  return (
    <div className=" max-w-5xl mx-auto px-4 lg:px-0">
      <div className="card lg:card-side">
        <figure>
          <Image src="/Delivery.png" width={450} height={450} alt="Food" />
        </figure>
        <div className="card-body">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-6">
            Enjoy Our Food in 3 Easy Steps
          </h2>
          <div>
            <div className=" flex items-center">
              <Image
                src="/shopping-bag.png"
                alt="Shopping Bag"
                width={40}
                height={40}
              />
              <h1 className=" text-lg font-semibold  ml-3">Choose Food Online</h1>
            </div>
            <div className=" flex items-center my-4">
              <Image
                src="/fast-delivery.png"
                alt="Shopping Bag"
                width={40}
                height={40}
              />
              <h1 className=" text-lg font-semibold  ml-3">Choose Delivery Time</h1>
            </div>
            <div className=" flex items-center">
              <Image
                src="/eating.png"
                alt="Shopping Bag"
                width={40}
                height={40}
              />
              <h1 className=" text-lg font-semibold  ml-3">Enjoy Our Food</h1>
            </div>
            <h1 className=" mt-12 text-gray-500 ">We Deliver Fresh Food From Our Best Resturants To Your Doorstep With Utmost Care and Smile.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
