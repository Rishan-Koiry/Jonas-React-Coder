import React from "react";
import Footer from "./Footer";
import bbqImage from "../assets/bbq.png";
import hawaiImage from "../assets/hawalini.png";
import piparoniImage from "../assets/piparoni.png";
import veggiImage from "../assets/veggi.png";

const Menu = ({ setCurrentPage, filterType = "all" }) => {
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
      isAvailable: true,
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

  // Filter pizzas based on filterType
  const filteredPizzas =
    filterType === "hot" ? pizzas.filter((pizza) => pizza.isHot) : pizzas;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Our Menu
            </h1>
            <p className="text-gray-600 text-center mb-12 text-lg">
              {filterType === "hot"
                ? "🔥 Hot & Trending Pizzas - Most Loved by Our Customers!"
                : "Discover our delicious selection of pizzas"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPizzas.map((pizza, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer relative"
                  onClick={() => setSelectedPizza(pizza)}
                >
                  {/* Hot Badge */}
                  {pizza.isHot && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                      🔥 Hot
                    </div>
                  )}

                  {/* Availability Badge */}
                  {!pizza.isAvailable && (
                    <div className="absolute top-3 left-3 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                      Out of Stock
                    </div>
                  )}

                  <img
                    src={pizza.imagename}
                    alt={pizza.name}
                    className={`w-full h-48 object-cover rounded-lg mb-4 ${
                      !pizza.isAvailable ? "opacity-50 grayscale" : ""
                    }`}
                  />

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
                      {pizza.isVeg ? "🌱 Veg" : "🍗 Non-Veg"}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {pizza.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      {pizza.price}
                    </span>
                    <button
                      className={`px-5 py-2 rounded-full transition-colors duration-200 text-sm font-medium ${
                        pizza.isAvailable
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-slate-400 text-white cursor-not-allowed"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (pizza.isAvailable) {
                          alert(`Order placed for ${pizza.name}!`);
                        } else {
                          alert("Sorry, this pizza is currently unavailable.");
                        }
                      }}
                    >
                      {pizza.isAvailable ? "Order Now" : "Unavailable"}
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Click for more details
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pizza Detail Modal */}
      {selectedPizza && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPizza(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPizza.imagename}
                alt={selectedPizza.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedPizza(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
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
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🔥 Hot & Trending
                  </span>
                )}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    selectedPizza.isVeg
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {selectedPizza.isVeg ? "🌱 Vegetarian" : "🍗 Non-Vegetarian"}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedPizza.name}
                </h2>
                <span className="text-3xl font-bold text-orange-600">
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
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Type</p>
                  <p className="font-bold text-gray-900">
                    {selectedPizza.isVeg
                      ? "🌱 Vegetarian"
                      : "🍗 Non-Vegetarian"}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Popularity</p>
                  <p className="font-bold text-gray-900">
                    {selectedPizza.isHot ? "🔥 Hot Seller" : "⭐ Regular"}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <p className="font-bold text-gray-900">
                    {selectedPizza.isAvailable
                      ? "✅ In Stock"
                      : "❌ Out of Stock"}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="font-bold text-orange-600 text-xl">
                    {selectedPizza.price}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (selectedPizza.isAvailable) {
                      alert(`Order placed for ${selectedPizza.name}!`);
                      setSelectedPizza(null);
                    } else {
                      alert("Sorry, this pizza is currently unavailable.");
                    }
                  }}
                  disabled={!selectedPizza.isAvailable}
                  className={`flex-1 py-3 rounded-full font-bold transition-colors ${
                    selectedPizza.isAvailable
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-slate-400 text-white cursor-not-allowed"
                  }`}
                >
                  {selectedPizza.isAvailable
                    ? "🛒 Order Now"
                    : "Currently Unavailable"}
                </button>
                <button
                  onClick={() => setSelectedPizza(null)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-full font-bold text-gray-700 hover:bg-gray-50 transition-colors"
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
