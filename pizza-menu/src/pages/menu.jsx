import React from "react";
import Footer from "./Footer";
import bbqImage from "../assets/bbq.png";
import hawaiImage from "../assets/hawalini.png";
import piparoniImage from "../assets/piparoni.png";
import veggiImage from "../assets/veggi.png";

const Menu = ({ setCurrentPage, filterType = "all", setMenuFilter, addToCart }) => {
  const [selectedPizza, setSelectedPizza] = React.useState(null);

  const pizzas = [
    {
      name: "Margherita",
      description: "Classic tomato sauce, mozzarella, and fresh basil",
      fullDescription:
        "Our signature Margherita pizza features the perfect blend of San Marzano tomato sauce, premium mozzarella, and fresh basil leaves. A timeless classic that never disappoints!",
      price: "$12.99",
      imagename: bbqImage,
      isHot: true,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella, and spicy pepperoni",
      fullDescription:
        "Loaded with generous amounts of spicy pepperoni slices on a bed of tangy tomato sauce and melted mozzarella. Our best-selling pizza that keeps customers coming back!",
      price: "$14.99",
      imagename: piparoniImage,
      isHot: true,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "BBQ Chicken",
      description: "BBQ sauce, chicken, onions, and cilantro",
      fullDescription:
        "Tender grilled chicken marinated in smoky BBQ sauce, topped with caramelized onions and fresh cilantro. A perfect blend of sweet and savory flavors.",
      price: "$15.99",
      imagename: bbqImage,
      isHot: false,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Veggie Delight",
      description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
      fullDescription:
        "A garden-fresh pizza loaded with colorful bell peppers, earthy mushrooms, crispy onions, tangy olives, and juicy tomatoes. Perfect for vegetable lovers!",
      price: "$13.99",
      imagename: veggiImage,
      isHot: false,
      isVeg: true,
      isAvailable: false,
      avgrate: 4.8,
    },
    {
      name: "Hawaiian",
      description: "Ham, pineapple, and mozzarella cheese",
      fullDescription:
        "The controversial classic! Savory ham and sweet pineapple chunks create a tropical flavor explosion. Love it or hate it, you have to try it!",
      price: "$14.99",
      imagename: hawaiImage,
      isHot: false,
      isVeg: false,
      isAvailable: false,
    },
    {
      name: "Four Cheese",
      description: "Mozzarella, cheddar, parmesan, and blue cheese",
      fullDescription:
        "For cheese lovers! This pizza combines four artisanal cheeses - creamy mozzarella, sharp cheddar, aged parmesan, and tangy blue cheese for an unforgettable experience.",
      price: "$16.49",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Four_cheese_pizza.jpg",
      isHot: true,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Tandoori Chicken",
      description: "Indian-style tandoori chicken with spicy sauce",
      fullDescription:
        "Experience India's flavors! Marinated chicken in aromatic tandoori spices with onions, bell peppers, and a special mint yogurt drizzle.",
      price: "$17.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Vegetarian_Pizza.jpg",
      isHot: true,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Mexican Fiesta",
      description: "Jalapeños, corn, onions, tomatoes, and spicy beef",
      fullDescription:
        "Spice up your life! This fiery pizza features jalapeños, sweet corn, onions, tomatoes, and seasoned spicy beef topped with a zesty salsa drizzle.",
      price: "$15.49",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Vegetarian_Pizza.jpg",
      isHot: false,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Cheese Burst",
      description: "Extra mozzarella and cheese-filled crust",
      fullDescription:
        "Double the cheese, double the fun! Extra mozzarella on top with a molten cheese-filled crust that oozes with every bite. Pure indulgence!",
      price: "$18.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Four_Cheese_-_Pizza_500_2023-11-10.jpg",
      isHot: true,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Spinach Alfredo",
      description: "Creamy Alfredo sauce with spinach and mozzarella",
      fullDescription:
        "A creamy dream! Rich Alfredo sauce topped with fresh spinach, garlic, and premium mozzarella. A sophisticated choice for those who appreciate subtle flavors.",
      price: "$16.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Vegetarian_Pizza.jpg",
      isHot: false,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Chicken Sausage",
      description: "Chicken sausage, bell peppers, onions, and olives",
      fullDescription:
        "Loaded with premium chicken sausage, colorful bell peppers, caramelized onions, and Mediterranean olives. A hearty, protein-packed option!",
      price: "$15.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/Pizza_Dhaka_2.JPG",
      isHot: false,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,

      isnonhot: true,
    },
    {
      name: "Paneer Tikka",
      description: "Spicy paneer cubes with capsicum and onions",
      fullDescription:
        "Indian fusion at its best! Marinated paneer tikka cubes with capsicum, onions, and a special tikka sauce. A vegetarian's delight!",
      price: "$14.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Vegetarian_Pizza.jpg",
      isHot: true,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Meat Lovers",
      description: "Bacon, ham, sausage, chicken, and pepperoni",
      fullDescription:
        "The ultimate carnivore's dream! Piled high with bacon, ham, Italian sausage, grilled chicken, and pepperoni. Not for the faint-hearted!",
      price: "$19.99",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Pepperoni_pizza.jpeg",
      isHot: true,
      isVeg: false,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Mushroom Supreme",
      description: "Three types of mushrooms with garlic butter sauce",
      fullDescription:
        "A mushroom lover's paradise! Features button mushrooms, shiitake, and portobello mushrooms sautéed in garlic butter. Earthy and delicious!",
      price: "$14.50",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Vegetarian_Pizza.jpg",
      isHot: false,
      isVeg: true,
      isAvailable: true,
      avgrate: 4.8,
    },
    {
      name: "Pesto Special",
      description: "Basil pesto, mozzarella, cherry tomatoes",
      fullDescription:
        "Fresh and aromatic! Homemade basil pesto with mozzarella pearls, sweet cherry tomatoes, and pine nuts. A taste of Italian summers!",
      price: "$16.75",
      imagename:
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Pizza_with_pineapple.jpg",
      isHot: false,
      isVeg: true,
      isAvailable: false,
    },
  ];

  const filteredPizzas = (() => {
    switch (filterType) {
      case "all":
        return pizzas;
      case "hot":
        return pizzas.filter((pizza) => pizza.isHot && pizza.isAvailable); // Only hot and available
      case "available":
        return pizzas.filter((pizza) => pizza.isAvailable); // Only available

      default:
        return pizzas.filter((pizza) => pizza.isAvailable);
    }
  })();

  return (
    <>
      <div className="min-h-screen bg-stone-50">
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 text-center mb-4">
              Our Menu
            </h1>
            <p className="text-stone-600 text-center mb-8 text-lg">
              {filterType === "hot"
                ? "Hot & trending — most loved by our customers"
                : filterType === "all"
                  ? "Our full selection"
                  : filterType === "available"
                    ? "Available now — ready to order"
                    : filterType === "unavailable"
                      ? "Hot sellers"
                      : "Discover our selection of pizzas"}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setMenuFilter("all")}
                className={`font-semibold transition-all duration-200 text-sm px-6 py-3 rounded-full ${
                  filterType === "all"
                    ? "text-white bg-red-800"
                    : "text-stone-700 bg-white hover:bg-red-50 hover:text-red-800 border border-stone-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMenuFilter("hot")}
                className={`font-semibold transition-all duration-200 text-sm px-6 py-3 rounded-full ${
                  filterType === "hot"
                    ? "text-white bg-red-800"
                    : "text-stone-700 bg-white hover:bg-red-50 hover:text-red-800 border border-stone-300"
                }`}
              >
                Hot
              </button>
              <button
                onClick={() => setMenuFilter("available")}
                className={`font-semibold transition-all duration-300 text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg ${
                  filterType === "available"
                    ? "text-white bg-green-700"
                    : "text-gray-700 bg-white hover:text-green-700 hover:bg-green-50 border-2 border-gray-300"
                }`}
              >
                Available
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPizzas.map((pizza, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative group hover:-translate-y-1 border border-stone-200/80"
                  onClick={() => setSelectedPizza(pizza)}
                >
                  {/* Hot Badge */}
                  {pizza.isHot && (
                    <div className="absolute top-3 right-3 bg-red-800 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      Hot
                    </div>
                  )}

                  {/* Availability Badge */}
                  {!pizza.isAvailable && (
                    <div className="absolute top-3 left-3 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                      Out of Stock
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={pizza.imagename}
                      alt={pizza.name}
                      className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 ${
                        !pizza.isAvailable ? "opacity-50 grayscale" : ""
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {pizza.name}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        pizza.isVeg
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {pizza.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {pizza.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-800">
                      {pizza.price}
                    </span>
                    <button
                      className={`px-5 py-2.5 rounded-full transition-all duration-200 text-sm font-semibold ${
                        pizza.isAvailable
                          ? "bg-red-800 text-white hover:bg-red-900 active:scale-[0.98]"
                          : "bg-stone-300 text-stone-500 cursor-not-allowed"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (pizza.isAvailable) setSelectedPizza(pizza);
                      }}
                    >
                      {pizza.isAvailable ? "Add to cart" : "Unavailable"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pizza Detail Modal */}
      {selectedPizza && (
        <div
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPizza(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPizza.imagename}
                alt={selectedPizza.name}
                className="w-full h-72 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedPizza(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex gap-2">
                {selectedPizza.isHot && (
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Hot
                  </span>
                )}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    selectedPizza.isVeg
                      ? "bg-green-700 text-white"
                      : "bg-red-800 text-white"
                  }`}
                >
                  {selectedPizza.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedPizza.name}
                </h2>
                <span className="text-3xl font-bold text-red-800">
                  {selectedPizza.price}
                </span>
              </div>

              {/* Availability Status */}
              <div className="mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                    selectedPizza.isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedPizza.isAvailable ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="font-semibold">
                    {selectedPizza.isAvailable
                      ? "Available Now"
                      : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedPizza.fullDescription}
                </p>
              </div>

              {/* Pizza Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="text-sm text-stone-600 mb-1">Type</p>
                  <p className="font-bold text-stone-900">
                    {selectedPizza.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  </p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="text-sm text-stone-600 mb-1">Popularity</p>
                  <p className="font-bold text-stone-900">
                    {selectedPizza.isHot ? "Hot seller" : "Regular"}
                  </p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="text-sm text-stone-600 mb-1">Status</p>
                  <p className="font-bold text-stone-900">
                    {selectedPizza.isAvailable ? "Available" : "Unavailable"}
                  </p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="text-sm text-stone-600 mb-1">Price</p>
                  <p className="font-bold text-red-800 text-xl">
                    {selectedPizza.price}
                  </p>
                </div>
                {selectedPizza.avgrate && (
                  <div className="bg-stone-50 p-4 rounded-lg col-span-2">
                    <p className="text-sm text-stone-600 mb-1">Rating</p>
                    <p className="font-bold text-stone-900">{selectedPizza.avgrate} / 5</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (selectedPizza.isAvailable && addToCart) {
                      addToCart(selectedPizza);
                      setSelectedPizza(null);
                    } else if (!selectedPizza.isAvailable) {
                      alert("Sorry, this pizza is currently unavailable.");
                    }
                  }}
                  disabled={!selectedPizza.isAvailable}
                  className={`flex-1 py-3 rounded-full font-bold transition-colors ${
                    selectedPizza.isAvailable
                      ? "bg-red-800 text-white hover:bg-red-900"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }`}
                >
                  {selectedPizza.isAvailable ? "Add to cart" : "Unavailable"}
                </button>
                <button
                  onClick={() => setSelectedPizza(null)}
                  className="px-6 py-3 border-2 border-stone-300 rounded-full font-bold text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};
export default Menu;
