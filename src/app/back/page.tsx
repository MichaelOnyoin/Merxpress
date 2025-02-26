'use client'

import { useEffect, useState } from "react";
import { ItemCard } from "@/components/ItemCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="p-4 mb-10 text-xl ">Products</h2>
      <div className="flex flex-row mb-4">
      {products.map((product: any) => (
        
        <ItemCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;