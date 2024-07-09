import MyCarousel from "../common/MyCarousel";
import { portfolioDetailsImages } from "../../constants";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Breadcrumbs from "../common/Breadcrumbs";
import "aos/dist/aos.css";
const PortfolioDetails = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
      };
  return (
    <>
    <Breadcrumbs/>
    <div className="py-[60px]">
        
      
            <div className="lg:px-14 px-[12px] md:px-[30px]" data-aos='fade-up'>
                <MyCarousel showDots={true} responsive={responsive} >
                    {
                        portfolioDetailsImages.map((item,index) => (
                            <div key={index} className="">
                                <img src={item} className="lg:w-[1296px] h-auto"/>
                            </div>       
                        ))
                    }
                </MyCarousel>
            </div>
            <div className="flex flex-col lg:flex-row mt-6 justify-between lg:px-14 px-[12px] md:px-[24px]" data-aos='fade-up'>
                <div className="lg:w-2/3 w-full">
                <h2 className="text-[26px] font-[700] mb-[20px] text-[#2d465e] font-heading md:mt-10">This is an example of portfolio details</h2>
                <p className="mb-4 font-default">Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                <p className="mb-4 font-default">Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>
                <div className="px-[30px] pt-[30px] bg-[#F8F8F8] mb-[50px] ">
                    <p className="italic mb-4 font-default ">
                        <FaQuoteLeft className="text-[#96DCA1]  relative inline-block -left-1"/>
                        <span> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                        <FaQuoteRight className="text-[#96DCA1]  relative inline-block -right-1"/>
                    </p>
                    <div className="flex">
                        <img src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-2.jpg" className="w-[90px] rounded-[50px] border-[6px] border-solid mr-[10px] "/>
                        <div className="flex flex-col">
                        <h3 className="text-[18px] font-bold mt-[15px] mb-[6px] pt-[20px] text-[#2d465e]">Sara Wilsson</h3>
                        <h4 className="text-[14px] text-[#6c757d] ">Designer</h4>
                        </div>
                       
                    </div>
                </div>
                <p className="mb-4 font-default">Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
                <p className="mb-4 font-default">Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
                </div>
                <div className="lg:w-1/4 w-full px-5 lg:mt-10">
                <h3 className="text-[22px] font-[700] relative pb-[15px] mb-[10px] block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-0.5 after:bg-[#34bf49] purecounter font-heading ">Project Information</h3>
                <ul className="text-[15px] mb-4">
                    <li className="flex flex-col pb-[15px] ">
                        <strong className="font-normal opacity-[50%] text-[14px] uppercase">Category</strong>
                        <span>Web Design</span>
                    </li>
                    <li className="flex flex-col pb-[15px]">
                        <strong className="uppercase font-normal opacity-[50%] text-[14px] ">Client</strong>
                        <span>ASU Company</span>
                    </li>
                    <li className="flex flex-col pb-[15px]">
                        <strong className="uppercase font-normal opacity-[50%] text-[14px] ">Project date</strong>
                        <span>01 March, 2020</span>
                    </li>
                    <li className="flex flex-col pb-[15px]">
                        <strong className="uppercase font-normal opacity-[50%] text-[14px] ">Project URL</strong>
                        <a href="#" className="text-[#34bf49]">www.example.com</a>
                    </li>
                    <li>
                        <a href="#" className="bg-[#34bf49] py-[8px] px-[40px] text-white rounded-[50px] ">Visit Website</a>
                    </li>
                </ul>
                </div>
            </div>

      
    </div>
    </>
  )
}

export default PortfolioDetails
