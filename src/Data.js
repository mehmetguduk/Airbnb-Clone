/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import img1 from "./images/card-images/img1.jpg";
import img2 from "./images/card-images/img2.jpg";
import img3 from "./images/card-images/img3.jpg";
import img5 from "./images/card-images/img5.jpg";
import img6 from "./images/card-images/img6.jpg";
import img7 from "./images/card-images/img7.jpg";
import img8 from "./images/card-images/img8.jpg";
import img9 from "./images/card-images/img9.jpg";

const data = [
    {
        id: 1,
        title: "Learn Professional Swimming Techniques",
        price: 120,
        priceDetail: "person",
        coverImg: img1,
        stats: {
            rating: 4.8,
            reviewCount: 80
        },
        location: "Turkey",
        openSpots: 4,
        online: false
    },
    {
        id: 2,
        title: "Group Mountain Biking",
        price: 40,
        priceDetail: "person",
        coverImg: img3,
        stats: {
            rating: 4.1,
            reviewCount: 45
        },
        location: "Italy",
        openSpots: 0,
        online: false
    },
    {
        id: 3,
        title: "Learn Canoe in Switzerland",
        price: 125,
        priceDetail: "person",
        coverImg: img2,
        stats: {
            rating: 4.9,
            reviewCount: 75
        },
        location: "Switzerland",
        openSpots: 3,
        online: true
    },
    {
        id: 4,
        title: "Improve Your Self-Confidence with Andrey Wilson",
        price: 30,
        priceDetail: "person",
        coverImg: img5,
        stats: {
            rating: 3.9,
            reviewCount: 154
        },
        location: "France",
        openSpots: 12,
        online: false
    },
    {
        id: 5,
        title: "Learn Wedding Photography from Professionals",
        price: 60,
        priceDetail: "person",
        coverImg: img6,
        stats: {
            rating: 4.3,
            reviewCount: 24
        },
        location: "Norway",
        openSpots: 2,
        online: true
    },
    {
        id: 6,
        title: "Become a Tattoo Designer",
        price: 240,
        priceDetail: "person",
        coverImg: img7,
        stats: {
            rating: 4.9,
            reviewCount: 541
        },
        location: "London",
        openSpots: 0,
        online: false
    },
    {
        id: 7,
        title: "Cook with a Dessert Master",
        price: 40,
        priceDetail: "person",
        coverImg: img8,
        stats: {
            rating: 4.8,
            reviewCount: 42
        },
        location: "Germany",
        openSpots: 4,
        online: true
    },
    {
        id: 8,
        title: "Off-Road Motorcycle Experience",
        price: 490,
        priceDetail: "person",
        coverImg: img9,
        stats: {
            rating: 4.8,
            reviewCount: 990
        },
        location: "U.S.A.",
        openSpots: 5,
        online: false
    }
]

export default data