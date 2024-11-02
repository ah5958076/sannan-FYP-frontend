import React, { useState,useEffect } from "react";
import { getProducts } from "../Apis/ecommerceApis/getProductsApis";

// let product_arr = [
//   {
//     id: 1,
//     name: "Rose",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 10.99,
//     quantity: 25,
//     rating:4.8,
//     categories: [
//       {
//         id: 1,
//         name: "flowers",
//       },
//       {
//         id: 0,
//         name: "hydra plant",
//       },
//     ],
//     description: "Beautiful red roses for your garden.",
//     uploadedBy: "UserA",
//     reviews: [
//       {
//         id: 0,
//         name: "Ali Hassan",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//       {
//         id: 1,
//         name: "Hussnain",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//       {
//         id: 2,
//         name: "Fahad Mustafa",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Lavender",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 8.49,
//     quantity: 20,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "A fragrant addition to your garden.",
//     uploadedBy: "Ahmed",
//     reviews: [
//       {
//         id: 0,
//         name: "Ali",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Fern",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 6.99,
//     quantity: 30,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Lush and green, perfect for shady areas.",
//     uploadedBy: "UserC",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Sunflower",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 9.99,
//     quantity: 15,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Bright and cheerful sunflowers.",
//     uploadedBy: "UserD",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Tulip",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 7.49,
//     quantity: 40,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Elegant tulips in various colors.",
//     uploadedBy: "UserE",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Succulent",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 5.99,
//     quantity: 50,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Low-maintenance and trendy succulents.",
//     uploadedBy: "UserF",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Orchid",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 12.99,
//     quantity: 10,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Exotic and elegant orchids for your home.",
//     uploadedBy: "UserG",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Palm Tree",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 15.99,
//     quantity: 5,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Tropical palm trees for a vacation vibe.",
//     uploadedBy: "UserH",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Bonsai Tree",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 11.49,
//     quantity: 12,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Miniature bonsai trees for zen gardens.",
//     uploadedBy: "UserI",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "Cactus",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 4.99,
//     quantity: 30,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Prickly cacti in various shapes and sizes.",
//     uploadedBy: "UserJ",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: "Hydrangea",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 9.49,
//     quantity: 18,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Colorful hydrangea bushes for your garden.",
//     uploadedBy: "UserK",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: "Aloe Vera",
//     img: "/assets/images/landing-page/plant-market.jpg",
//     price: 6.49,
//     quantity: 22,
//     rating:4.8,
//     categories: [{ id: 0, name: "hydra plant" }],
//     description: "Aloe vera plants with soothing properties.",
//     uploadedBy: "UserL",
//     reviews: [
//       {
//         id: 0,
//         name: "user",
//         description:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum nisi quibusdam repudiandae aut, quis vel ut dolor nobis iste officiis sunt? Non alias fugit exercitationem at ex dolorum neque rem magni, assumenda fugiat!",
//       },
//     ],
//   },
// ];

const useGetProduct = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchProducts();
}, []);

  const fetchProducts = async () => {
    const productData = await getProducts();
    setProducts(productData.data.products);
}
console.log('useGetProduct: products', products)
  return products;
};

export default useGetProduct;
