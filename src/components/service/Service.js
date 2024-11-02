import React from 'react'
import { Link } from 'react-router-dom';
import { getReviews } from '../../Apis/ecommerceApis/getReviewsApis';
import { useState,useEffect } from 'react';

const Service = ({service}) => {
console.log("service",service);
const [review,setReview] = useState();

useEffect(() => {
  const fetchReiws =async() => {
    const reviews = await getReviews(service._id);
    setReview(reviews);
  }
  fetchReiws();
},[])
console.log('review:', review)
const serviceLink = review 
  ? `/service/${encodeURIComponent(JSON.stringify(service))}/${encodeURIComponent(JSON.stringify(review))}`
  : `/service/${encodeURIComponent(JSON.stringify(service))}`;

  return (
    <Link to={serviceLink} className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-[20rem] md:max-w-[18rem] sm:w-[27rem] w-[18rem]">

      <img className="h-48 w-full object-cover object-end" src={service?.image?.url} alt="Home in Countryside" />
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-primary-200 text-primary-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide truncate line-clamp-1">{service?.userId?.userName}</span>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{service?.serviceName}</h4>
        <p className='line-clamp-2'>{service?.description}</p>
        <div className="mt-1">
          <span className='font-bold'>${service?.servicePrice}</span>
        </div>
        <div className="mt-2 flex items-center">
            <span className="text-primary-600 font-semibold">
                <span>
                    <span>{service.rating}</span>
                    <i className="fas fa-star ms-1"></i>
                </span>
                <span className="ml-3 text-gray-600 text-sm">{review?.length|| 0} reviews</span>
            </span>
        </div>
      </div>
    </Link>
  )
}

export default Service


// {
//     name: "Botanical Bliss Package",
//     description: "Indulge in a curated selection of exotic plants for your home.",
//     category: "Plant Package",
//     price: 99.99,
//     duration: "One-time purchase",
//     provider: "GreenHaven Gardens",
//     rating: 4.8,
//     reviews: [
//         { user: "HappyPlanter456", comment: "Absolutely love the variety in the package!" },
//         { user: "GreenThumb99", comment: "High-quality plants. Great value for money." }
//     ]
// },