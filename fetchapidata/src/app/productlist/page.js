'use client';

import { useEffect, useState } from "react";

function Productlist() {
  const [product, setProduct] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data.products);
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>API Call</h1>
      {product.length > 0 ? (
        product.map((item) => (
          <div key={item.id}>
            <h2>{item.description}</h2>
            <p>{item.brand}</p>
            {item.images.length > 0 && (
              <img
                src={item.images[0]} // Display the first image
                alt={item.description}
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Productlist;
