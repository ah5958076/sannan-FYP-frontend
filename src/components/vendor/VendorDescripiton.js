import React from "react";
import Service from "../service/Service";
import Product from "../product/Product";
const vendor = {
  id: 567,
  vendorName: "GreenScape Gardens",
  businessType: "Sole Proprietorship",
  email: "greenscape@gmail.com",
  phoneNumber: "+1 (555) 123-4567",
  address: "123 Green Avenue, Cityville, Gardenland",
  username: "greenscape_john",
  description:
    "Welcome to GreenScape Gardens, where we take pride in offering exceptional landscaping solutions for your outdoor spaces. Our expertise lies in crafting personalized garden designs, providing reliable seasonal maintenance, and curating exquisite plant packages. Whether you're seeking a unique garden design tailored to your preferences or a hassle-free maintenance plan to keep your outdoor space in top shape, GreenScape Gardens has you covered. Explore our assortment of high-quality plants, flowers, and gardening supplies, all carefully selected to elevate the beauty of your landscape. At GreenScape Gardens, our passionate team is dedicated to creating and maintaining stunning landscapes, ensuring you experience the full richness of nature right in your own backyard. Join us on a journey to transform your outdoor haven into a vibrant, lush paradise with the GreenScape experience.",
  servicesOffered: [
    {
      id:564,
      provider: 'GreenScape Gardens',
      name: "Custom Garden Design",
      description:
        "Create a personalized garden design tailored to your preferences.",
      category: "Design",
      rating: 4.9,
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
      price: 199.99,
      duration: "One-time service",
    },
    {
      id:564,
      provider: 'GreenScape Gardens',
      name: "Seasonal Garden Maintenance",
      description:
        "Keep your garden in top shape with our seasonal maintenance services.",
      category: "Maintenance",
      rating: 4.9,
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
      price: 79.99,
      duration: "Monthly subscription",
    },
    {
      id:564,
      provider: 'GreenScape Gardens',
      name: "Assorted Plant Package",
      description:
        "Get a variety of high-quality plants with our assorted plant package.",
      category: "Plant Package",
      rating: 4.9,
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
      price: 129.99,
      duration: "One-time purchase",
    },
    {
      id:564,
      provider: 'GreenScape Gardens',
      name: "Assorted Plant Package",
      description:
        "Get a variety of high-quality plants with our assorted plant package.",
      category: "Plant Package",
      rating: 4.9,
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
      price: 129.99,
      duration: "One-time purchase",
    },
  ],
  paymentDetails: {
    bankName: "GreenBank",
    accountNumber: "9876543210",
    accountHolder: "GreenScape Enterprises LLC",
  },
  productsOffered: [
    {
      id: 10,
      name: "Cactus",
      img: "/assets/images/landing-page/plant-market.jpg",
      price: 4.99,
      quantity: 30,
      rating:4.8,
      categories: [{ id: 0, name: "hydra plant" }],
      url:"", 
      description: "Prickly cacti in various shapes and sizes.",
      uploadedBy: "UserJ",
      reviews: [
        {
          id: 0,
          name: "user",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
        },
      ],
    },
    {
      id: 11,
      name: "Hydrangea",
      img: "/assets/images/landing-page/plant-market.jpg",
      price: 9.49,
      quantity: 18,
      rating:4.8,
      categories: [{ id: 0, name: "hydra plant" }],
      description: "Colorful hydrangea bushes for your garden.",
      uploadedBy: "UserK",
      reviews: [
        {
          id: 0,
          name: "user",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
        },
      ],
    },
    {
      id: 12,
      name: "Aloe Vera",
      img: "/assets/images/landing-page/plant-market.jpg",
      price: 6.49,
      quantity: 22,
      rating:4.8,
      categories: [{ id: 0, name: "hydra plant" }],
      description: "Aloe vera plants with soothing properties.",
      uploadedBy: "UserL",
      reviews: [
        {
          id: 0,
          name: "user",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
        },
      ],
    },
    {
      id: 12,
      name: "Aloe Vera",
      img: "/assets/images/landing-page/plant-market.jpg",
      price: 6.49,
      quantity: 22,
      rating:4.8,
      categories: [{ id: 0, name: "hydra plant" }],
      description: "Aloe vera plants with soothing properties.",
      uploadedBy: "UserL",
      reviews: [
        {
          id: 0,
          name: "user",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
        },
      ],
    },
  ]
};

const VendorDescripiton = () => {

  return (
    <div className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3">
      <div className="max-w-screen-xl md:w-[60vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl pb-6">
        <div className="w-full h-96">
          <img
            src="https://media.istockphoto.com/id/171239712/photo/flower-shop-in-paris.webp?s=2048x2048&w=is&k=20&c=UonhK3QwoxCnYDU9hBUJ4GBHqtDMft9n6Zn1ARoaZfQ="
            alt=""
            className="w-full object-cover h-full rounded-t-xl"
          />
        </div>
        <div className=" relative bottom-[5rem] sm:left-9 p-3 flex sm:flex-row flex-col md:items-start items-center gap-3 bg-neutral-200 shadow-md lg:max-w-[40vw] sm:max-w-[50vw] rounded-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1672848397438-f9d3ef5aea42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBsYW50JTIwbWFya2V0fGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="shadow md:w-[140px] sm:w-[100px] w-[60px] md:h-[140px] sm:h-[100px] h-[60px] object-cover rounded-full"
          />
          <div className="flex flex-col sm:text-start text-center">
            <h4 className="mt-2 font-semibold lg:text-xl text-md leading-tight truncate text-primary-900">
              {vendor.vendorName}
            </h4>
            <p className="line-clamp-2 lg:text-base text-sm">{vendor.email}</p>
            <p className="line-clamp-2 lg:text-base text-sm">{vendor.phoneNumber}</p>
            <p className="line-clamp-2 lg:text-base text-sm">{vendor.address}</p>
            <p className="line-clamp-2 lg:text-base text-sm">{vendor.businessType}</p>
          </div>
        </div>
        <div className="md:px-12 px-6 sm:text-start text-center">
          <h4 className="mt-2 font-semibold text-2xl leading-tight truncate text-primary-900">
            Description
          </h4>
          <p className="sm:text-base text-xs">{vendor.description}</p>
        </div>
        <div className="flex flex-col items-center mb-5">
          <h4 className="mt-2 w-full sm:text-start text-center font-semibold text-2xl truncate text-primary-900 px-12 mb-5">
            Top Services
          </h4>
          <div className="grid max-w-2xl  ps-0 place-items-center gap-6 lg:grid-cols-2">
            {
              (vendor.servicesOffered && vendor.servicesOffered.length > 0) ? (
                vendor.servicesOffered.map((service,index) => 
                  <Service key={index} service={service}/>
                )
              ) : null
            }
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-5">
          <h4 className="mt-2 w-full sm:text-start text-center font-semibold text-2xl truncate text-primary-900 px-12 mb-5">
            Top Products
          </h4>
          <div className="grid max-w-2xl  ps-0 place-items-center gap-6 lg:grid-cols-2">
            {
              (vendor.productsOffered && vendor.productsOffered.length > 0) ? (
                vendor.productsOffered.map((product,index) => 
                  <Product key={index} product={product}/>
                )
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDescripiton;
