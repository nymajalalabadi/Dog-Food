import { FaShoppingCart, FaStar, FaLeaf, FaBone, FaDog, FaFish, FaWeightHanging } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Adult Dog Food",
      description: "Complete nutrition for adult dogs with real chicken and vegetables",
      price: "$49.99",
      weight: "15 lbs",
      features: ["High-quality protein", "Grain-free formula", "Vet recommended"],
      image: "FaDog",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Puppy Growth Formula",
      description: "Specially formulated for puppies from 8 weeks to 12 months",
      price: "$54.99",
      weight: "12 lbs",
      features: ["Supports bone growth", "DHA for brain development", "Easy to digest"],
      image: "FaDog",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Senior Dog Nutrition",
      description: "Tailored nutrition for dogs 7+ years with joint support",
      price: "$52.99",
      weight: "14 lbs",
      features: ["Joint health support", "Lower calorie formula", "Antioxidant rich"],
      image: "FaDog",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Grain-Free Salmon Recipe",
      description: "Delicious salmon-based formula for sensitive stomachs",
      price: "$56.99",
      weight: "15 lbs",
      features: ["Hypoallergenic", "Omega-3 rich", "Digestive health"],
      image: "FaFish",
      rating: 4.6,
      reviews: 98
    },
    {
      id: 5,
      name: "Weight Management Formula",
      description: "Helps maintain healthy weight with controlled calories",
      price: "$48.99",
      weight: "13 lbs",
      features: ["Low calorie", "High fiber content", "Protein rich"],
      image: "FaWeightHanging",
      rating: 4.5,
      reviews: 67
    },
    {
      id: 6,
      name: "Organic Whole Food Mix",
      description: "100% organic ingredients with superfood blends",
      price: "$59.99",
      weight: "16 lbs",
      features: ["USDA Organic", "Superfood blend", "Natural antioxidants"],
      image: "FaLeaf",
      rating: 4.8,
      reviews: 203
    }
  ];

  const handleAddToCart = (productName) => {
    // Using react-hot-toast for notifications
    import('react-hot-toast').then(({ toast }) => {
      toast.success(`${productName} added to cart!`);
    });
  };

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our range of premium dog food formulas, each carefully crafted to meet
            your dog's specific nutritional needs and preferences.
          </p>
        </section>

        {/* Products Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4 flex justify-center">
                  {product.image === "FaDog" && <FaDog className="text-blue-500" />}
                  {product.image === "FaFish" && <FaFish className="text-orange-500" />}
                  {product.image === "FaWeightHanging" && <FaWeightHanging className="text-green-500" />}
                  {product.image === "FaLeaf" && <FaLeaf className="text-green-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {product.rating}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.weight}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <FaLeaf className="text-green-500 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleAddToCart(product.name)}
                className="w-full glass-button py-3 rounded-xl font-semibold flex items-center justify-center"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </section>

        {/* Features Section */}
        <section className="glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaBone className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Natural Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use only the highest quality, natural ingredients in all our formulas
              </p>
            </div>
            <div className="text-center">
              <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Vet Formulated
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our products are developed with input from veterinary nutritionists
              </p>
            </div>
            <div className="text-center">
              <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Premium Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rigorous quality control ensures every batch meets our high standards
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
