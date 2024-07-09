  import React from 'react';
  import { teamMembers } from '../../../constants';
  import MyCarousel from "../MyCarousel";
  import { FaArrowRightLong } from "react-icons/fa6";
  import { CustomLeftArrow, CustomRightArrow } from '../CustomArrows';

  const TeamCommonComponent = () => {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
    };
    return (
      <div className='py-[60px]'>
        <div>
          <div className='mx-10'>
            <MyCarousel showDots={false} responsive={responsive}    customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}>
              {teamMembers.map((member, index) => (
                <div key={index} className='flex flex-col mr-10'>
                  <img src={member.image} alt="team" className='mb-30px'/>
                  <h3 className='text-[20px] text-[#2d465e] mb-2 font-bold leading-[1.2] mt-4 '>{member.name}</h3>
                  <span className='text-[14px] mb-[20px]'>{member.founder}</span>
                  <p className='leading-[1.7] mb-4 '>{member.description}</p>
                  <p className='leading-[1.7] flex  '>
                    <a href='#' className='pr-[10px] '>Learn More </a>
                    <FaArrowRightLong className='mt-[6px] text-sm'/>
                  </p>
                </div>
              ))}
            </MyCarousel>
          </div>
        </div>
      </div>
    );
  };

  export default TeamCommonComponent;
