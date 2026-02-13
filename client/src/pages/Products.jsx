import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4">
      {products.map(p => (
        <div key={p._id} className="border p-4 rounded">
          <h2 className="font-semibold">{p.name}</h2>
          <p>{p.brand}</p>
          <p>₹ {p.price}</p>
          <p>Stock: {p.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
