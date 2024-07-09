import MyCarousel from "../common/MyCarousel";
import { features, imgData } from "../../constants";
import { blogPosts } from "../../constants";
import Goals from "../common/UI/Goals";
import "aos/dist/aos.css";
import WhyUs from "../common/UI/WhyUs";
import Services from "../common/UI/Services";
import Pricing from "../common/UI/Pricing";
import Testimonials from "../common/UI/Testimonials";
import Mission from "../common/UI/Mission";
import FAQ from "../common/UI/FAQ";
import { GoDotFill } from "react-icons/go";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };
  return (
    <div>
      <section className="flex flex-col md:flex-col lg:flex-row py-[60px] items-center md:px-0 ">
        <div
          className="w-full  lg:w-1/2 md:order-2 lg:order-1 order-2"
          data-aos="fade-up"
        >
          <div className="justify-center px-2 py-8  lg:px-28">
            <h1 className="text-[15px] font-default mb-[10px]">Welcome</h1>
            <h1 className="text-[#2D465E] text-[30px] font-heading font-[501]  leading-[1.2]">
              Excepteur sint occaecat cupidatat non proident
            </h1>
            <p className="mt-4 font-default leading-7 mb-[16px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <button className="bg-[#34BF49] text-white rounded-full px-4 py-2 mt-5 hover:bg-[#FFFFFF] hover:text-[#34BF49] border border-transparent hover:border-[#34BF49]">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 md:mr-[80px] md:ml-[80px] lg:ml-0 lg:mr-24 z-[1] px-3  order-1 md:order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <MyCarousel arrows={false} showDots={true} responsive={responsive}>
            {imgData.map((item) => (
              <img src={item} key={item} className="lg:mt-5 " />
            ))}
          </MyCarousel>
        </div>
      </section>

      <section className="bg-[#F3F4F4] py-[60px]">
        <Mission />

        <section className="pt-[60px] pb-[60px]">
          <div>
            <Goals />
          </div>
        </section>

        <section className="py-[60px]">
          <WhyUs />
        </section>
      </section>

      <section className="py-[60px]  bg-[#FFFFFF]">
        <div
          className="mx-auto max-w-7xl text-center pb-16 relative"
          data-aos="fade-up"
        >
          <p className="text-[15px] mb-[10px] mt-0 text-[#212529]">
            Recent Posts
          </p>
          <h2 className="text-[22px] font-[500] text-[#2d465e]">Blog Posts</h2>
        </div>
        <div className="md:mx-[24px] lg:mx-[24px]">
          <div className="flex flex-wrap  ">
            {blogPosts.map((post) => {
              return (
                <div
                  key={post.authorName}
                  className="w-full md:w-1/2 md:px-[12px] lg:w-1/3 lg:px-[12px] "
                >
                  <a
                    href="#"
                    className="block mb-[20px] mx-[12px] lg:mx-0 md:mx-0"
                    data-aos="fade-up"
                  >
                    <img
                      src={post.blogImage}
                      alt="blog"
                      className="max-w-full h-auto"
                    />
                  </a>
                  <div className="px-[30px]">
                    <div className="text-[12px]  flex gap-1">
                      <a
                        href="#"
                        className="uppercase font-normal text-[12px] mb-[20px] text-[#2d465e] "
                      >
                        {post.subTitle}
                      </a>
                      <GoDotFill className="size-2 mt-1" />
                      <span className="text-[12px]">{post.date}</span>
                    </div>
                    <h3 className="text-[18px] leading-[1.2] text-[#2d465e] font-[500] mb-2 cursor-pointer font-default">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="mb-4  font-default">{post.description}</p>
                    <div className="flex items-center mb-4">
                      <div className="mr-[20px] ">
                        <img
                          src={post.authorImage}
                          alt="author_image"
                          className="w-12 h-auto rounded-full"
                        />
                      </div>
                      <div className="block leading-[1.3]">
                        <strong className="block font-normal text-[#2d465e]">
                          {post.authorName}
                        </strong>
                        <span className="text-[14px]">{post.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          { features.map((feature) => (
            <
          ))
          
          }
          </div>
      </section>

      <section className="py-[60px] flex justify-center bg-[#FFFFFF]">
        <div>
          <Services />
        </div>
      </section>

      <section className="py-[60px] bg-[#f3f4f4] ">
        <Pricing />
      </section>

      <section className="py-[60px]">
        <FAQ />
      </section>

      <section className="py-[60px]">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
