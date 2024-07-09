import "aos/dist/aos.css";
const Pricing = () => {
  return (
    <div data-aos='fade-up'>
      <div className="pb-[60px] text-center relative">
              <p className="leading-[1.7] text-[#212529] text-[15px] mb-[10px]">Plans</p>
              <h2 className="text-[22px] font-[500] leading-[1.2] text-[#2d465e]">Pricing Table</h2>
            </div>

            <div className="flex flex-wrap lg:px-20 md:px-10 px-3 ">
              <div className="lg:w-1/3 md:w-1/2 w-full  mb-8">
                <div className="block bg-[#ffffff] px-[20px] py-[40px] text-center rounded-[8px] relative box-border shadow-2xl">
                  <h3 className="p-[15px] font-[500] text-[#2d465e] mt-[15px] text-[18px] leading-[1.2] mb-2">Free</h3>
                  <h4 className="text-[#34bf49] text-[42px] font-[500] leading-[1.2] mb-2 text-center ">
                    <sup className="text-[20px] top-[-15px] left-[-3px] relative align-baseline">$</sup>
                    <>0</>
                    <span className="text-[#2d465e] leading-[1.2] font-[300] text-[16px] ">/ month</span>
                  </h4>
                  <ul className="p-[20px] text-center leading-[20px] text-[14px] mb-4">
                    <li className="pb-[16px] ">Aida dere</li>
                    <li className="pb-[16px]">Nec feugiat nisl</li>
                    <li className="pb-[16px]">Nulla at volutpat dola</li>
                    <li className="pb-[16px] line-through">Pharetra massa</li>
                    <li className="pb-[16px] line-through">Massa ultricies mi</li>
                  </ul>
                  <div className="p-[15px] text-center">
                    <a href="#" className="text-[#34bf49] cursor-pointer border-[2px] pt-[10px] pb-[12px] pl-[40px] pr-[40px]  text-[600] text-[14px] rounded-[30px] border-solid border-[#34bf49]">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full md:pl-8 md:mb-0 mb-8">
                <div className="block bg-[#ffffff] px-[20px] py-[40px] text-center rounded-[8px] relative box-border shadow-2xl">
                  <span className="text-[13px] border rounded-[50px] text-[#34bf49] px-[25px] py-[4px] relative bg-[#EFFAF1]">Recommended</span>
                  <h3 className="p-[15px] font-[500] text-[#2d465e] mt-[15px] md:mt-0 text-[18px] leading-[1.2] mb-2">Business</h3>
                  <h4 className="text-[#34bf49] text-[42px] font-[500] leading-[1.2] mb-2 text-center ">
                    <sup className="text-[20px] top-[-15px] left-[-3px] relative align-baseline">$</sup>
                    <>19</>
                    <span className="text-[#2d465e] leading-[1.2] font-[300] text-[16px] ">/ month</span>
                  </h4>
                  <ul className="p-[20px] text-center leading-[20px] text-[14px] mb-4">
                    <li className="pb-[16px] ">Aida dere</li>
                    <li className="pb-[16px]">Nec feugiat nisl</li>
                    <li className="pb-[16px]">Nulla at volutpat dola</li>
                    <li className="pb-[16px] ">Pharetra massa</li>
                    <li className="pb-[16px] line-through">Massa ultricies mi</li>
                  </ul>
                  <div className="p-[15px] text-center">
                    <a href="#" className=" cursor-pointer border-[2px] pt-[10px] pb-[12px] pl-[40px] pr-[40px]  text-[600] text-[14px] rounded-[30px] border-solid border-[#34bf49] bg-[#34bf49] text-white">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full lg:pl-8 md:mb-0 mb-8">
                <div className="block bg-[#ffffff] px-[20px] py-[40px] text-center rounded-[8px] relative box-border shadow-2xl">
                  <h3 className="p-[15px] font-[500] text-[#2d465e] mt-[15px] text-[18px] leading-[1.2] mb-2">Developer</h3>
                  <h4 className="text-[#34bf49] text-[42px] font-[500] leading-[1.2] mb-2 text-center ">
                    <sup className="text-[20px] top-[-15px] left-[-3px] relative align-baseline">$</sup>
                    <>29</>
                    <span className="text-[#2d465e] leading-[1.2] font-[300] text-[16px] ">/ month</span>
                  </h4>
                  <ul className="p-[20px] text-center leading-[20px] text-[14px] mb-4">
                    <li className="pb-[16px] ">Aida dere</li>
                    <li className="pb-[16px]">Nec feugiat nisl</li>
                    <li className="pb-[16px]">Nulla at volutpat dola</li>
                    <li className="pb-[16px] line-through">Pharetra massa</li>
                    <li className="pb-[16px] line-through">Massa ultricies mi</li>
                  </ul>
                  <div className="p-[15px] text-center">
                    <a href="#" className="text-[#34bf49] cursor-pointer border-[2px] pt-[10px] pb-[12px] pl-[40px] pr-[40px]  text-[600] text-[14px] rounded-[30px] border-solid border-[#34bf49]"  >Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Pricing
