import Goals from '../common/UI/Goals'
import Breadcrumbs from '../common/Breadcrumbs'
import Mission from '../common/UI/Mission'
import WhyUs from '../common/UI/WhyUs'
import Testimonials from '../common/UI/Testimonials'
import TeamCommonComponent from '../common/UI/Team'


const About = () => {
  return (
    <>
      <Breadcrumbs/>
      <div className='py-[60px] '>
          <Mission/>
      </div>
      <div className='py-[60px] pb-[60px] bg-[#f3f4f4]'>
        <Goals/>
      </div>
      <div className='py-[60px] bg-[#f3f4f4]'>
        <WhyUs/>
      </div>
      <div className='py-[60px] '>
        <TeamCommonComponent/>
      </div>
      <div className='py-[60px] '>
        <Testimonials/>
      </div>
    </>

  )
}

export default About
