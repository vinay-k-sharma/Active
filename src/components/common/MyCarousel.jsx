
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = ({ children,showDots,responsive,customLeftArrow, customRightArrow }) => {


  return (
    <Carousel
      swipeable={true}  
      draggable={true}
      showDots={showDots}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={3000}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet","dekstop"]}
      deviceType="desktop"
      dotListClass="custom-dot-list-style"
      arrows={false}
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
    >
      {children}
      
    </Carousel>
  );
};

export default CarouselComponent;
