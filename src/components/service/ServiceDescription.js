import React from "react";
import { Link } from "react-router-dom";
import OwlReviewCarousel from "../carousels/OwlReviewCarousel";
import { useParams } from 'react-router-dom';


let service = {
  id: 546,
  name: "Botanical Bliss Package",
  description: "Indulge in a curated selection of exotic plants for your home.",
  category: "Plant Package",
  price: 99.99,
  duration: "One-time purchase",
  provider: "GreenHaven Gardens",
  rating: 4.8,
  reviews: [
    {
      user: "HappyPlanter456",
      comment: "Absolutely love the variety in the package!",
    },
    {
      user: "GreenThumb99",
      comment: "High-quality plants. Great value for money.",
    },
  ],
};

const ServiceDescription = () => {
  const { service, review } = useParams();

  const decodedService = JSON.parse(decodeURIComponent(service));
  let decodedReview ;
  if(review){
    decodedReview = JSON.parse(decodeURIComponent(review))
  }

  return (
    <div className=" min-h-screen bg-secondary-100 flex flex-col justify-center sm:px-12 px-6">
      <div className="max-w-screen-xl bg-neutral-200 px-6 py-6 rounded-lg shadow-lg flex flex-col items-center gap-12">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <img
            class="md:w-[15rem] rounded-lg object-cover object-end"
            src={decodedService?.image?.url}
            alt="Home in Countryside"
          />
          <div>
            <div class="flex items-baseline">
              <span class="inline-block bg-primary-200 text-primary-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide truncate line-clamp-1">
                {decodedService?.userId?.userName}
              </span>
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
              {decodedService?.serviceName}
            </h4>
            <p className="line-clamp-2">{decodedService?.description}</p>
            <div class="mt-1">
              <span className="font-bold">${decodedService?.servicePrice}</span>
            </div>

            <div class=" flex items-center">
              <span class="text-primary-600 font-semibold">
                <span class=" text-gray-600 text-sm">This package sold to </span>
                <span className="ml-1">
                  <span>48 people</span>
                </span>
              </span>
            </div>

            {/* review */}
            <div class="mt-2 mb-5 flex items-center">
              <span class="text-primary-600 font-semibold">
                <span>
                  <span>{decodedService.rating}</span>
                  <i class="fas fa-star ms-1"></i>
                </span>
                <span class="ml-3 text-gray-600 text-sm">
                  {decodedReview?.length} reviews
                </span>
              </span>
            </div>
            <Link to={`/service/${service.id}/buy`} className=" bg-primary-800 hover:bg-primary-900 text-neutral-200 rounded-xl px-8 py-2 text-lg tracking-widest">Buy</Link>
          </div>
        </div>
          <OwlReviewCarousel reviews={decodedReview}/>
      </div>
    </div>
  );
};

export default ServiceDescription;
