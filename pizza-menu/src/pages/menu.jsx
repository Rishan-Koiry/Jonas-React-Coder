import React from "react";
import Footer from "./Footer";

const Menu = ({ setCurrentPage }) => {
  const pizzas = [
    {
      name: "Margherita",
      description: "Classic tomato sauce, mozzarella, and fresh basil",
      price: "$12.99",
    },
    {
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella, and spicy pepperoni",
      price: "$14.99",
    },
    {
      name: "BBQ Chicken",
      description: "BBQ sauce, chicken, onions, and cilantro",
      price: "$15.99",
    },
    {
      name: "Veggie Delight",
      description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
      price: "$13.99",
    },
    {
      name: "Hawaiian",
      description: "Ham, pineapple, and mozzarella cheese",
      price: "$14.99",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Our Menu
            </h1>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Discover our delicious selection of pizzas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((pizza, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-5xl mb-4 text-center">🍕</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pizza.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pizza.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      {pizza.price}
                    </span>
                    <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 text-sm font-medium">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
              }
            </div>
          </div>
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};
export default Menu;
