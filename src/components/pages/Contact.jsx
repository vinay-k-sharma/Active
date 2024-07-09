import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";

import Breadcrumbs from '../common/Breadcrumbs'

const Contact = () => {
  return (
    <>
      <Breadcrumbs/>

      <div className="p-[60px] box-border block">
          <div>
            <div className="flex flex-wrap">
              <div className="md:w-1/3 w-full">
                <div className="box-border block p-[40px] shadow-lg">
                  <h3 className="text-[#2d465e] text-[24px] mb-2 font-[600] leading-[1.2] block ">Get in touch</h3>
                  <p className="mb-[30px] text-[15px]  box-border block ">Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>
                  <div className="flex box-border">
                    <CiLocationOn className="flex-shrink-0 box-border text-[24px] text-[#34bf49] mr-[20px]"/>
                    <div className="box-border block">
                      <h4 className="text-[#2d465e] text-[18px]  mb-[5px] font-[800] leading-[24px] box-border">Location:</h4>
                      <p className="text-[14px]">A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="flex box-border pt-[20px] mt-[20px] border-t-[1px] solid">
                    <TfiEmail className="flex-shrink-0 box-border text-[18px] text-[#34bf49] mr-[20px]"/>
                    <div className="box-border block">
                      <h4 className="text-[#2d465e] text-[18px]  mb-[5px] font-[800] leading-[24px] box-border">Email:</h4>
                      <p className="text-[14px]">info@example.com</p>
                    </div>
                  </div>
                  <div className="flex box-border pt-[20px] mt-[20px] border-t-[1px] solid">
                    <CiMobile2 className="flex-shrink-0 box-border text-[24px] text-[#34bf49] mr-[20px]"/>
                    <div className="box-border block">
                      <h4 className="text-[#2d465e] text-[18px]  mb-[5px] font-[800] leading-[24px] box-border">Call:</h4>
                      <p className="text-[14px]">+1 5589 55488 55</p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>

              <div className="md:w-2/3 w-full md:pl-10 ">
                <form className="pt-12 md:pt-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full">
                        <input type="text" placeholder="Your Name" className="h-[48px] py-[10px] px-[15px] text-[14px] border border-solid border-[#2d465e] border-opacity-80 font-normal leading-[1.5] w-full "/>
                    </div>

                    <div className="md:w-1/2 w-full pb-[8px] md:pl-[28px]">
                     
                        <input type="text" placeholder="Your Email" className="h-[48px] py-[10px] px-[15px] text-[14px] border border-solid border-[#2d465e] border-opacity-80 font-normal leading-[1.5] w-full focus:border-green-500 mt-8 md:mt-0 "/>
             
                    </div>
                  </div>
                  <div className="pb-[8px] mt-4 ">
                      <input type="text" placeholder="Subject" className="h-[48px] py-[10px] px-[15px] text-[14px] border border-[#2d465e] border-opacity-80 font-normal leading-[1.5] border-solid w-full"/>
                    </div>

                    <div className="pb-[8px] mt-4 ">
                      <textarea className="py-[10px] px-[12px] h-[290px] text-[14px] border border-opacity-80 border-[#2d465e] w-full font-normal leading-[1.5] " placeholder="Message"/>
                    </div>

                    <div className=" text-center">
                      <button type="submit" className="bg-[#34bf49] py-[13px] px-[50px] border rounded-[4px] text-[#ffffff]">Send Message</button>
                    </div>
                </form>
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default Contact
