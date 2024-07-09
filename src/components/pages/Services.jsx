import ServicesComponent from '../common/UI/Services'
import Breadcrumbs from '../common/Breadcrumbs'
import Goals from '../common/UI/Goals'

const Services = () => {
  return (
    <>
      <Breadcrumbs/>
      <div className='p-[60px] block'>
        <ServicesComponent/>
      </div>

      <div className='p-[60px] bg-[#f3f4f4] block'>
        <Goals/>
      </div>
    </>
  )
}

export default Services
