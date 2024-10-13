"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import ABX from "../../../public/ABX.png"
import car from "../../../public/car.png"
import API from "../../../public/API.png"
import currency from "../../../public/crrency.png"

interface ComponentProps {
  products: { title: string; link: string; thumbnail: string; }[];
  size?: string;  // Add this line to include the size prop
}

function project() {
  return (
    <>
      <HeroParallax products={products.map(product => ({
        ...product,
        thumbnail: typeof product.thumbnail === 'string' ? product.thumbnail : product.thumbnail.src
      }))}
       />
    </>
  )
}
export const products = [

  {
    title: "Car Rental(HTML,CSS,JS)",
    link: "https://rentcaar.netlify.app/",
    thumbnail:
      car,
  },
  {
    title: "ABX School (MERN)",
    link: "https://schoolof.netlify.app/",
    thumbnail:
      ABX,
  },
  {
    title: "mtxdp(API)",
    link: "https://mtxdp.netlify.app/",
    thumbnail:
      API,
  },
  {
    title: "Currency Convertor",
    link: "https://currencyconvertor09.netlify.app",
    thumbnail:
    currency,
  },
]

export default project