import { ShoppingBasket, UsersRound, ChartBar } from "lucide-react";
import { FaNairaSign } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";

export const navbarItems = [
  {
    id: "1",
    title: "home",
    pathName: "/",
  },
  {
    id: "2",
    title: "about",
    pathName: "/about",
  },
  {
    id: "3",
    title: "policy",
    pathName: "/policy",
  },
  {
    id: "4",
    title: "product",
    pathName: "/product",
  },
  {
    id: "5",
    title: "admin",
    pathName: "/admin",
  },
  {
    id: "6",
    title: "contact",
    pathName: "/contact",
  },
];

export const eyeglassBrands = [
  "Ray-Ban",
  "Oakley",
  "Gucci",
  "Prada",
  "Versace",
  "Armani Exchange",
  "Tom Ford",
  "Warby Parker",
  "Persol",
  "Michael Kors",
  "Burberry",
  "Dolce & Gabbana",
  "Maui Jim",
  "Fendi",
  "Cartier",
  "Coach",
  "Hugo Boss",
  "Costa Del Mar",
  "Chanel",
  "Vogue Eyewear",
];

export const carouselData = [
  {
    name: "Ama Princess",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing ",
    path: "/p1.jpg",
    position: "ceo & cto",
    rating: 3,
  },
  {
    name: "Zee Jolli",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing ",
    path: "/person-1.png",
    position: "student",
    rating: 4,
  },
  {
    name: "Joy Regina",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing ",
    path: "/p2.jpg",
    position: "cashier",
    rating: 4.2,
  },
  {
    name: "Vera Jasmine",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing ",
    path: "/p3.jpg",
    position: "developer",
    rating: 4.2,
  },
];

export const dataItems = [
  {
    id: "1",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-3.png",
    qty: 2,
  },
  {
    id: "2",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-3.png",
    qty: 2,
  },
  {
    id: "3",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-3.png",
    qty: 2,
  },
  {
    id: "4",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-3.png",
    qty: 2,
  },
  {
    id: "5",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-5.png",
    qty: 2,
  },
  {
    id: "6",
    title: "home",
    brand: "Gucci",
    name: "Michael Kors MURREN MK2218U",
    price: 123,
    image: "/glass-5.png",
    qty: 2,
  },
];

export const adminDetails = [
  {
    id: "1",
    title: "product",
    icon: ShoppingBasket,
    activeState: "products",
  },
  {
    id: "2",
    title: "sales",
    icon: FaNairaSign,
    activeState: "sales",
  },
  {
    id: "3",
    title: "customer",
    icon: UsersRound,
    activeState: "users",
  },
  {
    id: "4",
    title: "analytics",
    icon: ChartBar,
    activeState: "analytics",
  },
  {
    id: "5",
    title: "coupons",
    icon: CiDiscount1,
    activeState: "coupons",
  },
];

export const nigeriaStates = {
  // Abia: 3000,
  // Adamawa: 3500,
  // "Akwa Ibom": 3000,
  // Anambra: 3000,
  // Bauchi: 4000,
  // Bayelsa: 4000,
  // Benue: 5000,
  // Borno: 6000,
  // "Cross River": 4000,
  // Delta: 3000,
  // Ebonyi: 4000,
  // Edo: 3000,
  // Ekiti: 4000,
  // Enugu: 4000,
  // Gombe: 6000,
  // Imo: 4000,
  // Jigawa: 6000,
  // Kaduna: 6000,
  // Kano: 6000,
  // Katsina: 6000,
  // Kebbi: 6000,
  // Kogi: 6000,
  // Kwara: 6000,
  Lagos: 4000,
  abraka: 100,
  // Nasarawa: 6000,
  // Niger: 6000,
  // Ogun: 3000,
  // Ondo: 3000,
  // Osun: 3000,
  // Oyo: 4000,
  // Plateau: 5000,
  // Rivers: 4000,
  // Sokoto: 6000,
  // Taraba: 6000,
  // Yobe: 6000,
  // Zamfara: 6000,
  // "FCT-Abuja": 6000,
};

export const ratings = [
  {
    productId: "prod_1",
    userId: "user_1",
    value: 5,
    comment: "Amazing product! Highly recommend.",
  },
  {
    productId: "prod_1",
    userId: "user_2",
    value: 4,
    comment: "Very good, just a bit pricey.",
  },
  {
    productId: "prod_2",
    userId: "user_3",
    value: 3,
    comment: "Average quality, not bad for the price.",
  },
  {
    productId: "prod_1",
    userId: "user_4",
    value: 2,
    comment: "Expected more based on the reviews.",
  },
  {
    productId: "prod_2",
    userId: "user_5",
    value: 1,
    comment: "Not satisfied at all.",
  },
];
