'use client'

import { useEffect, useState } from "react";
import { ItemCard } from "@/components/ItemCard";
import { Product } from "@/db/definitions";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://backend.onyoin.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-gray-100 w-full">
      <h2 className="p-4 mb-10 text-2xl font-bold mb-6 text-slate-800 max-md:max-w-full ">Products</h2>
      <div className="flex flex-col mt-2">
      <div className="flex flex-row mb-4">
      {products.slice(0, 4).map((product:Product) => (
        
        <ItemCard key={product.id} product={product}  />
      ))}
      </div>
      </div>
      <div className="flex flex-col mt-2">
      <div className="flex flex-row mb-4">
      {products.slice(4).map((product:Product) => (
        
        <ItemCard key={product.id} product={product}  />
      ))}
      </div>
      </div>
    </div>
  );
};

export default Products;