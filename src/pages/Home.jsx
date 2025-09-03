import { FaPaw, FaHeart, FaShieldAlt, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Premium Dog Food
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Nourishing your furry friend with the finest ingredients for a healthy, happy life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-button px-8 py-4 text-lg font-semibold rounded-xl">
              Shop Now
            </button>
            <button className="glass-button px-8 py-4 text-lg font-semibold rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why Choose Our Dog Food?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaPaw className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">Made with the finest natural ingredients for optimal nutrition</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Health Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">Specially formulated to support your dog's overall well-being</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Safe & Natural</h3>
              <p className="text-gray-600 dark:text-gray-300">Free from artificial additives and harmful preservatives</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Vet Approved</h3>
              <p className="text-gray-600 dark:text-gray-300">Recommended by veterinarians for your dog's nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Give Your Dog the Best?
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of happy dog owners who have switched to our premium dog food
            </p>
            <button className="glass-button px-10 py-4 text-xl font-semibold rounded-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
