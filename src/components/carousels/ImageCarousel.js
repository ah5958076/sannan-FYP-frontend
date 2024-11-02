import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ImageCarousel = ({ images,size }) => {

    if(!images) return null;



    console.log('images:',images)
  return (
    <div>
      
      <div class={" md:max-w-[20rem] sm:max-w-[14rem] max-w-[8rem]"}>
        <OwlCarousel items={1} className="owl-theme" loop margin={8}>
          {
            images.map((image,index) =>             
                <div key={index} >
                    <img className="object-fit" src={images[index].url} />
                </div>
            )
          }
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
