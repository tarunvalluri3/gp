import React, { useState } from "react";

const Admin = () => {
  const [data, setData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await fetch("http://localhost:5000/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
          stock: Number(data.stock),
        }),
      });

      const resData = await result.json();

      if (!result.ok) {
        throw new Error(resData.message || "Failed");
      }

      alert("Product added successfully");

      setData({
        name: "",
        brand: "",
        description: "",
        price: "",
        stock: "",
      });

    } catch (err) {
      console.error(err);
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-semibold mt-6">
        Add Products Here
      </h1>

      <form
        className="max-w-md mx-auto mt-6 p-6 border rounded-lg shadow space-y-4 bg-white"
        onSubmit={onFormSubmit}
      >
        <input
          name="name"
          placeholder="Name"
          value={data.name}
          required
          className="w-full border rounded px-3 py-2"
          onChange={handleChange}
        />

        <input
          name="brand"
          placeholder="Brand"
          value={data.brand}
          required
          className="w-full border rounded px-3 py-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          required
          className="w-full border rounded px-3 py-2 h-28 resize-none"
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={data.price}
          required
          className="w-full border rounded px-3 py-2"
          onChange={handleChange}
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={data.stock}
          required
          className="w-full border rounded px-3 py-2"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded py-2 hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </>
  );
};

export default Admin;
