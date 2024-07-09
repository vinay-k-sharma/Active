import { BiSearch } from "react-icons/bi";
import { MdKeyboardCommandKey } from "react-icons/md"
import { BiGridAlt } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import "aos/dist/aos.css";
const ServicesComponent = () => {
  return (
    <div className="flex flex-wrap lg:mx-32 mx-6 justify-center" data-aos='fade-up'>
            <div className="lg:w-1/3 md:w-1/2 w-full flex-shrink-0 max-w-full ">
              <span className="text-[15px] mb-[10px] block text-[#212529] font-default">
                Our Services
              </span>
              <h2 className="text-[22px] text-[#2d465e] mb-[30px] leading-[1.2] font-[500] font-heading">
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </h2>
              <p className="leading-[1.6] text-[18px] font-normal mb-4 text-[#212529] font-default">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className="text-[#212529] leading-[1.7] mb-12 font-default">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="text-[#212529] leading-[1.7] mb-4">
                <a
                  href="#"
                  className="bg-[#34bf49] text-[#ffffff] rounded-[30px] pt-2 pb-2 pl-[30px] pr-[30px] border-solid text-[14px] border-transparent border-2"
                >
                  Get Started
                </a>
              </p>
            </div>

            <div className="lg:w-[50%] md:w-1/2 w-full">
            <div className="md:pl-12">
              <div className="flex flex-wrap ">
              <div className="flex w-1/2 ">
                <div>
                <div className="text-[#34bf49] mb-5 text-[50px] "><BiSearch/></div>
                    <h3 className="text-[17px] font-normal text-[#2d465e] leading-[1.2]  mb-2 block font-heading">Square</h3>
                    <p className="leading-[1.7] text-[#212529] mb-4 font-default">Seprated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
              <div className="flex w-1/2">
                
                <div>
                <div className="text-[#34bf49] mb-5 text-[48px]"><MdKeyboardCommandKey/></div>
                    <h3 className="text-[17px] font-normal text-[#2d465e] leading-[1.2] mb-2 block font-heading">Technology</h3>
                    <p className="leading-[1.7] text-[#212529] mb-4 font-default">Seprated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
              <div className="flex w-1/2">
                
                <div>
                <div className="text-[#34bf49] mb-5 text-[48px]"><BiGridAlt/></div>
                    <h3 className="text-[17px] font-normal text-[#2d465e] leading-[1.2] mb-2 block font-heading">Brilliant Ideas</h3>
                    <p className="leading-[1.7] text-[#212529] mb-4 font-default">Seprated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
              <div className="flex w-1/2">
                
                <div>
                <div className="text-[#34bf49] mb-5 text-[48px]"><BsGlobe/></div>
                    <h3 className="text-[17px] font-normal text-[#2d465e] leading-[1.2] mb-2 block font-heading">Blueprint</h3>
                    <p className="leading-[1.7] text-[#212529] mb-4 font-default">Seprated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
              </div>    
            </div>
            </div>
      </div>
  )
}

export default ServicesComponent
