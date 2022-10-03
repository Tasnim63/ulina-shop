import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ data }) {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} />
      ))}
    </>
  );
}
