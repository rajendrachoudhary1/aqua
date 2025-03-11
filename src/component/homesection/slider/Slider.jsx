
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../header/Header";
import hero from '../../../assets/background/back1.png'
import hero1 from '../../../assets/background/back2.png'
import hero2 from '../../../assets/background/back3.png'
import hero3 from '../../../assets/background/back4.png'
 
 
const featureinfo = [
  {
    img: hero,
  },
  {
    img: hero1,
  },
  {
 
    img: hero2,
  },
  {
    img: hero3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,  
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,  
  },
};

const Slider = (props) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet","mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows ={false}
    >
      {featureinfo.map((feature, index) => (
        <div key={index}>
          <Header
             img={feature.img}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
