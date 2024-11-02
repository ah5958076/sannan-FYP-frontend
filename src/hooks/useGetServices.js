import React, { useEffect, useState } from 'react'
import { getServices } from '../Apis/ecommerceApis/getServicesApis';

let services_arr = [
    {
        id:546,
        name: "Botanical Bliss Package",
        description: "Indulge in a curated selection of exotic plants for your home.",
        category: "Plant Package",
        price: 99.99,
        duration: "One-time purchase",
        provider: "GreenHaven Gardens",
        rating: 4.8,
        reviews: [
            { user: "HappyPlanter456", comment: "Absolutely love the variety in the package!" },
            { user: "GreenThumb99", comment: "High-quality plants. Great value for money." }
        ]
    },
    {
        id:546,
        name: "Seasonal Garden Maintenance",
        description: "Ensure your garden thrives with our seasonal maintenance services.",
        category: "Maintenance",
        price: 79.99,
        duration: "Monthly subscription",
        provider: "SeasonalSolutions Landscaping",
        rating: 4.6,
        reviews: [
            { user: "GardenGuru123", comment: "Reliable and thorough maintenance services." },
            { user: "NatureLover22", comment: "My garden has never looked better!" }
        ]
    },
    {
        id:546,
        name: "Bespoke Landscape Design",
        description: "Transform your outdoor space with a custom-designed landscape.",
        category: "Design",
        price: 199.99,
        duration: "One-time service",
        provider: "ArtisanLandscapes Design Studio",
        rating: 4.9,
        reviews: [
            { user: "CreativeGardener", comment: "The design exceeded my expectations!" },
            { user: "OutdoorOasisFan", comment: "A work of art in my backyard. Highly recommended." }
        ]
    },
    {
        id:546,
        name: "Indoor Plant Care Workshop",
        description: "Learn the secrets of keeping your indoor plants thriving and healthy.",
        category: "Workshop",
        price: 29.99,
        duration: "2 hours",
        provider: "UrbanJungle Care",
        rating: 4.5,
        reviews: [
            { user: "IndoorOasis123", comment: "Informative workshop. My plants are thriving!" },
            { user: "PlantParent101", comment: "Great tips for indoor plant enthusiasts." }
        ]
    },
    {
        id:546,
        name: "Herb Garden Starter Kit",
        description: "Kickstart your herb garden with our curated starter kit.",
        category: "Starter Kit",
        price: 49.99,
        duration: "One-time purchase",
        provider: "HerbHeaven Supplies",
        rating: 4.7,
        reviews: [
            { user: "CulinaryHerbFan", comment: "The kit has all I need for my kitchen garden!" },
            { user: "HealthyCook22", comment: "Fresh herbs at my fingertips. Love it!" }
        ]
    },
    {
        id:546,
        name: "Plant Parenthood Consultation",
        description: "Expert advice for new plant parents navigating the world of plant care.",
        category: "Consultation",
        price: 39.99,
        duration: "1 hour",
        provider: "PlantParenthood Experts",
        rating: 4.6,
        reviews: [
            { user: "NewPlantParent22", comment: "Invaluable insights for beginners like me." },
            { user: "LeafLover456", comment: "A must for anyone starting their plant journey." }
        ]
    },
    {
        id:546,
        name: "Succulent Variety Pack",
        description: "Discover the beauty of succulents with our assorted variety pack.",
        category: "Plant Pack",
        price: 59.99,
        duration: "One-time purchase",
        provider: "SucculentParadise Nursery",
        rating: 4.8,
        reviews: [
            { user: "SucculentEnthusiast", comment: "Stunning variety. They arrived in perfect condition!" },
            { user: "CactusLover22", comment: "A lovely addition to my succulent collection." }
        ]
    },
    {
        id:546,
        name: "Professional Pruning Services",
        description: "Ensure the health and beauty of your plants with our expert pruning services.",
        category: "Pruning",
        price: 69.99,
        duration: "One-time service",
        provider: "PrunePerfection Services",
        rating: 4.7,
        reviews: [
            { user: "GardenGroomer123", comment: "Efficient and skillful pruning. My garden looks immaculate!" },
            { user: "LeafArtist22", comment: "The pruned plants are thriving. Highly recommended." }
        ]
    },
    {
        id:546,
        name: "Terrarium Building Workshop",
        description: "Create your own mini ecosystem with our terrarium building workshop.",
        category: "Workshop",
        price: 34.99,
        duration: "1.5 hours",
        provider: "TinyTerrariums Workshop",
        rating: 4.4,
        reviews: [
            { user: "TerrariumExplorer", comment: "Fun and educational workshop. My terrarium is a masterpiece!" },
            { user: "GreenThumbArtist", comment: "A unique and creative experience. Loved it!" }
        ]
    },
]


const useGetServices = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        const fetchServices = async () => {
          try {
            const servicesData = await getServices();
            setServices(servicesData);
          } catch (error) {
            console.error("Error fetching services:", error);
          }
        };
    
        fetchServices();
      }, []);
    return services; 
}

export default useGetServices
