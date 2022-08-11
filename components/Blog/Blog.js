import Image from "next/image";

const Blog = () => {
  return (
    <div className=" mb-14">
      <h1 className=" text-3xl text-gray-800 text-center my-10 font-semibold">
        Recent Blogs
      </h1>
      <div className="blogContainer grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl lg:mx-auto mx-5">
        <div>
          <div className="card w-full bg-base-100 image-full hover:scale-105 transition-all ease-in-out hover:shadow-2xl">
            <figure>
              <Image
                className=" rounded-none"
                src="/Blog_1.png"
                width={480}
                height={350}
                layout=""
                alt="Blog"
              />
            </figure>
            <div className="card-body text-center select-none">
              <span className="  uppercase">6 Days Ago</span>
              <h2 className=" text-2xl  font-semibold text-center">
                Hubei Vegetable
              </h2>
              <p>
                Find info on Vegetable and Melon Farming companies in Hubei,
                including financial statements.
              </p>
              <button className=" btn w-[130px] bg-red-400 mx-auto capitalize text-[17px]">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-full bg-base-100 image-full hover:scale-105 transition-all ease-in-out hover:shadow-2xl">
            <figure>
              <Image
                className=" rounded-none"
                src="/Blog_2.png"
                width={480}
                height={350}
                layout=""
                alt="Blog"
              />
            </figure>
            <div className="card-body text-center select-none">
              <span className=" uppercase">15 Days Ago</span>
              <h2 className=" text-2xl  font-semibold text-center">
                Diced Chicken
              </h2>
              <p>
                Diced chicken, it usually means that you want small cubes,
                somewhere around ½-inches on all sides
              </p>
              <button className=" btn w-[130px] bg-red-400 mx-auto capitalize text-[17px]">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-full bg-base-100 image-full hover:scale-105 transition-all ease-in-out hover:shadow-2xl">
            <figure>
              <Image
                className=" rounded-none"
                src="/Blog_3.png"
                width={480}
                height={350}
                layout=""
                alt="Blog"
              />
            </figure>
            <div className="card-body text-center select-none">
              <span className=" uppercase">13 Days Ago</span>
              <h2 className=" text-2xl  font-semibold text-center">
                Four Treasure Mushroom
              </h2>
              <p>
                Treasure Mushroom is an invisible fungus only seen by those who
                have obtained the Nuhoch
              </p>
              <button className=" btn w-[130px] bg-red-400 mx-auto capitalize text-[17px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
