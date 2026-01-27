import React, { useState } from "react";

function ProductCalculator() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const calculateTotal = () => {
    return price * quantity;
  };

  return (
    <div className="p-4 m-4 border rounded bg-green-100">
      <h2 className="text-xl font-bold">🛒 Product Calculator</h2>

      <label className="block mb-2">Price: </label>
      <input
        className="border p-2 rounded"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <br /><br />

      <label className="block mb-2">Quantity: </label>
      <input
        className="border p-2 rounded"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <h3 className="mt-4 text-2xl">Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default ProductCalculator;