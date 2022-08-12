import Image from "next/image";
import Styles from '../../styles/Blog.module.css'

const Blog = () => {
  return (
    <div id="blogs" className=" bg-white mb-14">
      <h1 className=" text-3xl text-gray-800 text-center my-10 font-semibold">
        Recent Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto max-w-6xl">
        <div>
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div>
              <div className=" relative card rounded-none w-96 mx-auto">
                <Image
                  className=" relative"
                  src="/Blog_1.png"
                  width={400}
                  height={250}
                  alt="Blog"
                />
                <div className={Styles.BlogText}>
                  <h1 className=" text-gray-800">Hubei Vegetable</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-down" data-aos-duration="3000" className="">
            <div>
              <div className=" relative card rounded-none w-96 mx-auto">
                <Image
                  className=" relative"
                  src="/Blog_2.png"
                  width={400}
                  height={250}
                  alt="Blog"
                />
                <div className={Styles.BlogText}>
                  <h1 className=" text-gray-800">Diced Chicken</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div className="">
              <div className=" relative card rounded-none w-96 mx-auto">
                <Image
                  className=" relative"
                  src="/Blog_3.png"
                  width={400}
                  height={250}
                  alt="Blog"
                />
                <div className={Styles.BlogText}>
                  <h1  className=" text-gray-800">Honey Glazed Ginger</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
