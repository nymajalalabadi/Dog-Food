import { FaAward, FaUsers, FaLeaf, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're passionate about providing the highest quality nutrition for your beloved pets,
            combining decades of expertise with cutting-edge research.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 2010, our company began with a simple mission: to create dog food
                that dogs actually love while providing the nutrition they need to thrive.
              </p>
              <p className="mb-4">
                What started as a small family business has grown into a trusted brand that
                serves thousands of happy dogs and their owners across the country.
              </p>
              <p>
                Every decision we make is guided by our commitment to quality, safety, and
                the well-being of your furry family members.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">
                To provide premium, nutritious dog food that supports the health and happiness
                of dogs everywhere, while building lasting relationships with pet owners.
              </p>
              <p className="mb-4">
                We believe that every dog deserves the best nutrition possible, and we're
                committed to delivering products that exceed expectations.
              </p>
              <p>
                Through innovation, quality ingredients, and expert formulation, we strive
                to be the trusted choice for pet nutrition.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaAward className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 ">Quality First</h3>
              <p className="">We never compromise on the quality of our ingredients</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 ">Pet Owners</h3>
              <p className="">Your trust and satisfaction are our top priorities</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 ">Sustainability</h3>
              <p className="">Committed to environmentally friendly practices</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaHandshake className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 ">Transparency</h3>
              <p className="">Open about our ingredients and manufacturing process</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 ">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Dr. Jane Doe</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Veterinarian</p>
              <p className="">Over 15 years of experience in veterinary nutrition</p>
            </div>
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Mike Smith</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Head of Product Development</p>
              <p className="">Former research scientist at leading pet food companies</p>
            </div>
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Sarah Lee</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Quality Assurance Director</p>
              <p className="">Ensures every product meets our high standards</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
