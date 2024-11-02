import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlReviewCarousel = ({ reviews, bg = 'bg-neutral-300' }) => {

    if(!reviews) return null;

  return (
    <div class={`md:max-w-[25rem] sm:max-w-[20rem] max-w-[14rem] p-6 rounded-lg shadow ${bg}`}>
        <OwlCarousel items={1} className="owl-theme" loop autoplay autoplayTimeout={4000}  margin={8}>
            {
            reviews.map((review,index) =>             
                <div key={index} className="flex flex-col gap-6 items-center text-center">
                    <h4 class="mt-2 font-semibold text-lg leading-tight truncate">{review?.userId?.userName}</h4>
                    <p className="text-center">{review?.content}</p>
                </div>
            )
            }
        </OwlCarousel>
    </div>
  );
};

export default OwlReviewCarousel;
