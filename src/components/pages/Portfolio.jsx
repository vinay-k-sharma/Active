import  { useState } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import MyCarousel from "../common/MyCarousel";
import { portfolio } from "../../constants";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState("All");
  const [isOpenModal,setIsOpenModal] = useState(false);
  const [carouselItems,setCarouselItems] = useState([]);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleZoomClick = (selectedImage) => {
    setIsOpenModal(true);
    const categoryItems = portfolio.filter((item) => item.category === selectedImage.category);
    setCarouselItems(categoryItems);
    console.log(categoryItems)
  }

  

  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const Links = ["All", "App", "Card", "Web"];

  const filteredImages =  activeLink === 'All' ? portfolio : portfolio.filter(item => item.category.toLowerCase() === activeLink.toLowerCase());

  return (
    <>
      <Breadcrumbs />

      <section className="py-[60px]" data-aos='fade-up'>
        <div>
          <div className="mb-[8px] ">
            <ul className="flex justify-center gap-4">
              {Links.map((link, index) => (
                <li
                  key={index}
                  className={`py-[9px] px-[20px] text-[15px] leading-[1] font-[500] rounded-[50px]  mb-[5px] cursor-pointer
              ${activeLink === link ? "bg-[#34bf49] text-white" : ""}`}
                  onClick={() => handleLinkClick(link)}
                > 
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-[80px]">
            <div className="columns-1 gap-5 lg:gap-6  sm:columns-2 lg:columns-3  ">
              {
                filteredImages.map((item) => (
                  <div key={item.id} className="pt-6 relative group">
                    <div className="">
                    <img src={item.image} className=""/>
                    <div className="absolute invisible  group-hover:visible bottom-0 bg-white opacity-80 w-full h-[80px] p-[15px]  ">
                       <h4 className="text-[18px] font-[600] pr-[50px] text-[#2d465e] leading-[1.2] ">{item.title}</h4>
                       <p className="text-[14px] pr-[50px] ">{item.description}</p>
                       <HiMagnifyingGlassPlus  className="absolute right-[50px] text-[24px] top-[5px] cursor-pointer mt-2" onClick={() => handleZoomClick(item)}/>
                       <Link to="/portfolio-details" className="absolute right-[10px] text-[24px] top-[5px] cursor-pointer mt-2"><IoIosLink/></Link>
                    </div>

                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </section>

      {isOpenModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-[80vw] h-[80vh]  rounded-lg p-6">
      <MyCarousel showDots={true} responsive={responsive}>
        {carouselItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} className="w-[80vw] h-[80vh]"/>
            <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">{item.title}</h3>
            <p className="text-[14px]">{item.description}</p>
          </div>
        ))}
      </MyCarousel>
    </div>
    <div
              className="absolute top-10 text-white right-0 text-3xl cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            >
              <IoMdClose className="text-3xl" />
            </div>
  </div>
)}


      <div className="py-[60px]" data-aos='fade-up'>
        <div className="flex flex-wrap justify-center">
          <div className="md:w-1/2 w-full">
            <MyCarousel showDots={true} responsive={responsive}>
              <div className="flex flex-col items-center">
                <img
                  className="w-[70px] rounded-full mb-4"
                  src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-1.jpg"
                />
                <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">
                  Adam Anderson
                </h3>
                <blockquote className="m-4 items-center">
                  <p className="leading-[1.7] text[#212529] mb-4 ">
                    “There live the blind texts. Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.”
                  </p>
                </blockquote>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[70px] rounded-full mb-4"
                  src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-2.jpg"
                />
                <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">
                  Lukas Devlin
                </h3>
                <blockquote className="m-4 items-center">
                  <p className="leading-[1.7] text[#212529] mb-4 ">
                    “There live the blind texts. Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.”
                  </p>
                </blockquote>
              </div>
              <div className=" flex flex-col items-center">
                <img
                  className="w-[70px] rounded-full mb-4"
                  src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-3.jpg"
                />
                <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">
                  Kayla Bryant
                </h3>
                <blockquote className="m-4 items-center">
                  <p className="leading-[1.7] text[#212529] mb-4">
                    “There live the blind texts. Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.”
                  </p>
                </blockquote>
              </div>
            </MyCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
