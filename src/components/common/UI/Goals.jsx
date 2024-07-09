import 'aos/dist/aos.css'
import { BsBullseye } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md"
import { BsBarChart } from "react-icons/bs";
const Goals = () => {
  return (
    <div className=" flex flex-wrap mt-14 md:px-16 justify-center">
      <div className="px-6 py-0  lg:flex-none w-full max-w-full lg:w-1/4"
      data-aos="fade-up"
      >
      <BsBullseye className="text-[#34bf49] mb-5 text-[48px]"/>
      <h3 className="text-[17px] font-normal text-[#2d465e] mb-2 leading-[1.2] mt-0 font-default">Technology</h3>
      <p className='mt-0 mb-4 font-default'>Separated they live in Bookmarksgrove right at the coast</p>
      </div>
        
      <div className="px-6 py-0  lg:flex-none w-full max-w-full lg:w-1/4"
      data-aos="fade-up"
      data-aos-delay="100"
      >
        <MdKeyboardCommandKey className="text-[#34bf49] mb-5 text-[48px]"/>
        <h3 className="text-[17px] font-normal text-[#2d465e] mb-2 leading-[1.2] mt-0 font-default">Web Design</h3>
        <p className='mt-0 mb-4 font-default'>Separated they live in Bookmarksgrove right at the coast</p>
      </div>

      <div className="px-6 py-0  lg:flex-none w-full max-w-full lg:w-1/4"
      data-aos="fade-up"
      data-aos-delay="200"
      >
        <BsBarChart className="text-[#34bf49] mb-5 text-[48px]"/>
        <h3 className="text-[17px] font-normal text-[#2d465e] mb-2 leading-[1.2] mt-0 font-default">Branding</h3>
        <p className='mt-0 mb-4 font-default'>Separated they live in Bookmarksgrove right at the coast</p>
      </div>
    </div>
  )
}

export default Goals
