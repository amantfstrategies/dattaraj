import { FaRupeeSign, FaShoppingBag, FaCarSide } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { AiOutlineControl } from "react-icons/ai";
import { TbAirConditioning } from "react-icons/tb";

export const CarData = [
  {
    id: "maruti-ertiga",
    limit: "10 hrs / 100 km",
    car: {
      name: "Maruti Ertiga",
      image: "/cars/ertiga.png",
      features: [
        { name: "AC", value: "4000" },
        { name: "Non AC", value: "3500" },
        { name: "Extra km/hrs. (AC)", value: "15/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "18/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "AC",
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 1700,
      currency: "INR",
    },
  },

  {
    id: "swift-dzire",
    limit: "10 hrs / 100 km",
    car: {
      name: "Swift Dzire",
      image: "/cars/swift-dzire.png",
      features: [
        { name: "AC", value: "4500" },
        { name: "Non AC", value: "3900" },
        { name: "Extra km/hrs. (AC)", value: "18/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "20/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 7000,
      currency: "INR",
    },
  },

  {
    id: "toyota-etios",
    limit: "10 hrs / 100 km",
    car: {
      name: "Toyota Etios",
      image: "/cars/toyota-etios.png",
      features: [
        { name: "AC", value: "4700" },
        { name: "Non AC", value: "4200" },
        { name: "Extra km/hrs. (AC)", value: "17/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "18/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 7200,
      currency: "INR",
    },
  },

  {
    id: "vittera-breeza",
    limit: "8 hrs / 80 km",
    car: {
      name: "Vittera Brezza",
      image: "/cars/vittera-breeza.png",
      features: [
        { name: "AC", value: "3800" },
        { name: "Non AC", value: "3300" },
        { name: "Extra km/hrs. (AC)", value: "20/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "19/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 7100,
      currency: "INR",
    },
  },

  {
    id: "toyota-innova",
    limit: "12 hrs / 180 km",
    car: {
      name: "Toyota Innova",
      image: "/cars/innova.png",
      features: [
        { name: "AC", value: "5000" },
        { name: "Non AC", value: "4500" },
        { name: "Extra km/hrs. (AC)", value: "22/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "19/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 8000,
      currency: "INR",
    },
  },

  {
    id: "innova-crysta",
    limit: "18 hrs / 180 km", 
    car: {
      name: "Innova Crysta",
      image: "/cars/innova-crysta.png",
      features: [
        { name: "AC", value: "5200" },
        { name: "Non AC", value: "4700" },
        { name: "Extra km/hrs. (AC)", value: "21/Km" },
        { name: "Extra km/hrs. (Non AC)", value: "20/Km" },
      ]
    },
    details: [
      {
        title: "Refueling",
        description:
          "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.",
      },
      {
        title: "Car Wash",
        description:
          "Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.",
      },
      {
        title: "No Smoking",
        description:
          "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing.",
      },
    ],
    included: [
      "Audio Input",
      "Bluetooth",
      "Heated Seats",
      "All Wheel drive",
      "USB Input",
      "FM Radio",
    ],
    notIncluded: ["GPS Navigation", "Sun-roof"],
    pricing: {
      perDay: 8500,
      currency: "INR",
    },
  },
];
