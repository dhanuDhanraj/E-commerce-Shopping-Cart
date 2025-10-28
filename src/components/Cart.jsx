import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) return null;

  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-2xl rounded-3xl p-8 max-w-5xl mx-auto mb-16 border border-purple-200">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-800">
        🛍️ Your Cart
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Left side - image & details */}
            <div className="flex items-center space-x-5">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover shadow-sm border border-gray-200"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-purple-600 font-medium mt-1">₹{item.price}</p>
              </div>
            </div>

            {/* Right side - remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart total summary */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Total:{" "}
          <span className="text-purple-700">
            ₹
            {cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()}
          </span>
        </h3>
        <button className="mt-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
