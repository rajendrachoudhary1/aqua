
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hero from '../../../assets/basin1.jpg'
import hero1 from '../../../assets/basin2.jpg'
 
import Basin from "../basin/Basin";
const featureinfo = [
  {
    img: hero,
    title:'LUXURY WASH BASIN COLLECTIONS',
  },
  {
    img: hero1,
    title : 'LUXURY SINK COLLECTIONS'
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
      showDots={true}
      responsive={responsive}
      ssr={true}  
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
      arrows={false}  
    >
      {featureinfo.map((feature, index) => (
        <div key={index}>
          <Basin img={feature.img} title ={feature.title}/>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
