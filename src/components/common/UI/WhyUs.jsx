import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";
const WhyUs = () => {
    useEffect(() => {
            new PureCounter()
    },[])
  return (
    <div className="flex justify-center flex-wrap lg:px-44 px-[12px] md:px-[30px]">
      <div className="lg:w-5/12 ">
        <img src="https://bootstrapmade.com/demo/templates/Active/assets/img/img_v_1.jpg" alt="why_us" className="max-w-full h-auto" data-aos='fade-up' data-aos-delay='200'/>
      </div>

      <div className="lg:w-7/12 lg:pl-12 lg:pr-28">
        <h1 className=" text-[15px] mb-[10px] text-[#212529] mt-[24px] md:mt-[24px] lg:mt-0">Why us</h1>

        <h2 className="mb-[30px] text-[22px] text-[#2d465e]  leading-[1.2]">Far far away Behind the Word Mountains</h2>

        <p className="leading-[1.6] text-[18px] font-normal text-[#212529] mb-[1rem]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

        <p className="leading-[1.7] text-[#212529] mb-[3rem]">There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

        <div className="flex flex-wrap justify-center ">
            <div className="w-1/3">
                <span 
                data-purecounter-start="0"
                data-purecounter-end="3919"
                data-purecounter-duration="1"
                className="text-[1.8rem] text-[#2d465e] relative pb-[7px] mb-[10px] block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-5 after:h-0.5 after:bg-[#34bf49] purecounter"></span>
                <span >Coffee</span>
            </div>

            <div className="w-1/3">
                <span 
                data-purecounter-start="0"
                data-purecounter-end="2831"
                data-purecounter-duration="1"
                className="text-[1.8rem] text-[#2d465e] relative pb-[7px] mb-[10px] block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-5 after:h-0.5 after:bg-[#34bf49] purecounter"></span>
                <span>Codes</span>
            </div>

            <div className="w-1/3">
                <span 
                data-purecounter-start="0"
                data-purecounter-end="1914"
                data-purecounter-duration="1"
                className="text-[1.8rem] text-[#2d465e] relative pb-[7px] mb-[10px] block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-5 after:h-0.5 after:bg-[#34bf49] purecounter"></span>
                <span>Projects</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
