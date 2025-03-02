import React from 'react'
import './Tapcard.css'
import Card from '../Card/Card'
import i1 from '../../assets/t1.png'
import i2 from '../../assets/FLT/f2.png'
import i3 from '../../assets/FLT/f3.png'
import i4 from '../../assets/FLT/FLT-1107.jpg'
import i5 from '../../assets/FLT/FLT-1108.jpg'
import i6 from '../../assets/FLT/FLT-1109.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const tapinfo = [
    { img: i1, title: 'FLT-1103', name: 'Angle Cock with Flange' },
    { img: i2, title: 'FLT-1104', name: 'Stop Cock with Flange' },
    { img: i3, title: 'FLT-1105', name: 'Bibb Cock with Flange' },
    { img: i4, title: 'FLT-1107', name: 'Concealed Stop Cock' },
    { img: i5, title: 'FLT-1108', name: 'Sink Cock' },
    { img: i6, title: 'FLT-1109', name: 'Wall Mixer' }
];
// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,  // Ensures 3 items per slide
//         slidesToSlide: 1, 
//         partialVisibilityGutter: 20 // Ensures spacing
//       },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3,
//       slidesToSlide: 3,  
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 3,
//       slidesToSlide: 3,  
//     },
//   };

const Tapcard = (props) => {
  return (
    <> 
     <div className='tapcard'>
        <h3>BEST SELLER</h3>
        <p>Brass is an alloy of copper and zinc that is popularly used for 
          manufacturing faucets because of its property to be 
          resistant to corrosion and hard-water calcification.</p>
        <div className='tap'> 
            <Card img={i1} title={tapinfo[0].title} name={tapinfo[0].name}/>
            <Card img={i2} title={tapinfo[1].title} name={tapinfo[1].name}/>
            {/* <Card img={i3} title={tapinfo[2].title} name={tapinfo[2].name}/> */}
            
        </div>
          
        {/* <Carousel
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
    //   dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
        
       {tapinfo.map((feature, index) => (
        <div key={index}>
            {/* <h1>hii</h1> */}
            
            {/* <Card img={feature.img} title={feature.title} name={feature.name} />  */}
        {/* </div> */}
      {/* ))}  */} 
        
    {/* </Carousel> */}
           

        {/* </div> */}

      
    </div>
    </>
  )
}

export default Tapcard
