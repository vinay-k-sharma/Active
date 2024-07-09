import MyCarousel from "../MyCarousel";
import "aos/dist/aos.css";
const Testimonials = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };
  return (
    <div>
    <div className='text-center pb-[60px] relative' data-aos='fade-up'>
        <p className='leading-[1.7] text-[#212529] text-[15px] mb-[10px]'>Happy Customers</p>
        <h2 className='text-[22px] font-[500] text-[#2d465e] leading-[1.2]'>Testimonials</h2>
    </div> 

    <div data-aos='fade-up'>
        <div className='flex flex-wrap justify-center'>
            <div className='md:w-1/2 w-full'>
            
              <MyCarousel showDots={true} responsive={responsive}>
                
                  <div className="flex flex-col items-center">
                    <img className="w-[70px] rounded-full mb-4" src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-1.jpg"/>
                    <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">Adam Anderson</h3>
                    <blockquote className="m-4 items-center">
                      <p className="leading-[1.7] text[#212529] mb-4 ">
                        “There live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-[70px] rounded-full mb-4" src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-2.jpg"/>
                    <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">Lukas Devlin</h3>
                    <blockquote className="m-4 items-center">
                      <p className="leading-[1.7] text[#212529] mb-4 ">
                        “There live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.”
                      </p>
                    </blockquote>
                  </div>
                  <div className=" flex flex-col items-center">
                    <img className="w-[70px] rounded-full mb-4" src="https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-3.jpg"/>
                    <h3 className="text-[18px] text-[#2d465e] font-[500] leading-[1.2] mb-2">Kayla Bryant</h3>
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
    </div>
  )
}

export default Testimonials
