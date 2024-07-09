import {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
const FAQ = () => {
    const [open, setOpen] = useState({})

    const toggleFaq = (id) => {
        setOpen((prev) => ({
            ...prev,
            [id] : !prev[id]
        }))
    }
  return (
    <div>
      <div className="pb-[60px] relative text-center">
        <p className="leading-[1.7] text-[15px] mb-[10px] ">Plans</p>
        <h2 className="text-[22px] font-[500] text-[#2d465e]">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col lg:mx-20 mx-3 md:mx-10">
        <div>
          <details className="">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-[#f3f4f4] transition-all duration-300" onClick={() => toggleFaq('faq1')}>
            <IoIosArrowDown  className={` text-xl ${open['faq1'] ? 'rotate-180' : ''}`}/>
              <span className={`${open['faq1'] ? 'text-[#34BF49]' : ''}`}>How to download and register?</span>
            </summary>

            <article className="px-4 pb-4 pt-4">
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </article>
          </details>
        </div>

        <div>
          <details className="">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-[#f3f4f4]" onClick={() => toggleFaq('faq2')}>
            <IoIosArrowDown className={` text-xl ${open['faq2'] ? 'rotate-180' : ''}`} />
              <span className={`${open['faq2'] ? 'text-[#34BF49]' : ''}`}>How to create your paypal account?</span>
            </summary>

            <article className="px-4 pb-4 pt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.{" "}
              </p>
            </article>
          </details>
        </div>

        <div>
          <details className="">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium hover:cursor-pointer bg-[#f3f4f4] transition-all " onClick={() => toggleFaq('faq3')}>
            <IoIosArrowDown className={` text-xl ${open['faq3'] ? 'rotate-180' : ''}`}/>
              <span className={`${open['faq3'] ? 'text-[#34BF49]' : ''}`}>How to link your paypal and bank account?</span>
            </summary>

            <article className="px-4 pb-4 pt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.{" "}
              </p>
            </article>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
