import { FaCalendar, FaUser, FaClock, FaArrowRight, FaUtensils, FaList, FaLeaf, FaSpa, FaDog } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Protein in Dog Nutrition",
      excerpt: "Discover why protein is crucial for your dog's health and how our formulas provide the perfect balance of high-quality proteins for optimal nutrition.",
      author: "Dr. Jane Doe",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Nutrition",
      image: "FaUtensils"
    },
    {
      id: 2,
      title: "Understanding Dog Food Labels: What to Look For",
      excerpt: "Learn how to read and understand dog food labels to make informed decisions about your pet's nutrition and avoid misleading marketing claims.",
      author: "Mike Smith",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "FaList"
    },
    {
      id: 3,
      title: "Seasonal Nutrition: Adjusting Your Dog's Diet",
      excerpt: "How to modify your dog's nutrition throughout the year to account for seasonal changes in activity levels and environmental factors.",
      author: "Dr. Jane Doe",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Health",
      image: "FaLeaf"
    },
    {
      id: 4,
      title: "The Benefits of Grain-Free Dog Food",
      excerpt: "Explore the advantages of grain-free formulas and when they might be the right choice for your dog's specific dietary needs.",
      author: "Sarah Lee",
      date: "December 8, 2024",
      readTime: "4 min read",
      category: "Nutrition",
      image: "FaSpa"
    },
    {
      id: 5,
      title: "Puppy Nutrition: The First Year Matters",
      excerpt: "Essential nutrition guidelines for puppies during their critical first year of development and growth.",
      author: "Dr. Jane Doe",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Puppies",
      image: "FaDog"
    },
    {
      id: 6,
      title: "Senior Dog Nutrition: Supporting Golden Years",
      excerpt: "Specialized nutrition considerations for senior dogs to maintain health, mobility, and quality of life in their golden years.",
      author: "Mike Smith",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Health",
      image: "FaDog"
    }
  ];

  const categories = ["All", "Nutrition", "Health", "Education", "Puppies"];

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dog Nutrition Blog
          </h1>
          <p className="text-xl  max-w-3xl mx-auto">
            Stay informed with expert advice on dog nutrition, health tips, and the latest
            research in pet food science. Your dog's health starts with knowledge.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="glass-button px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-6 flex justify-center">
                  {blogPosts[0].image === "FaUtensils" && <FaUtensils className="text-red-500" />}
                  {blogPosts[0].image === "FaList" && <FaList className="text-blue-500" />}
                  {blogPosts[0].image === "FaLeaf" && <FaLeaf className="text-green-500" />}
                  {blogPosts[0].image === "FaSpa" && <FaSpa className="text-yellow-500" />}
                  {blogPosts[0].image === "FaDog" && <FaDog className="text-orange-500" />}
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <FaUser className="mr-1" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center">
                    <FaCalendar className="mr-1" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-1" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg  mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <button className="glass-button px-6 py-3 rounded-xl font-semibold flex items-center hover:scale-105 transition-transform duration-300">
                  Read Full Article
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div className="text-center">
                <div className="text-8xl opacity-50 flex justify-center">
                  {blogPosts[0].image === "FaUtensils" && <FaUtensils className="text-red-500" />}
                  {blogPosts[0].image === "FaList" && <FaList className="text-blue-500" />}
                  {blogPosts[0].image === "FaLeaf" && <FaLeaf className="text-green-500" />}
                  {blogPosts[0].image === "FaSpa" && <FaSpa className="text-yellow-500" />}
                  {blogPosts[0].image === "FaDog" && <FaDog className="text-orange-500" />}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <div className="text-5xl mb-4 flex justify-center">
                  {post.image === "FaUtensils" && <FaUtensils className="text-red-500" />}
                  {post.image === "FaList" && <FaList className="text-blue-500" />}
                  {post.image === "FaLeaf" && <FaLeaf className="text-green-500" />}
                  {post.image === "FaSpa" && <FaSpa className="text-yellow-500" />}
                  {post.image === "FaDog" && <FaDog className="text-orange-500" />}
                </div>
                <div className="inline-block glass-card px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <FaUser className="mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <FaCalendar className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-1" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3  line-clamp-2">
                {post.title}
              </h3>

              <p className=" mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <button className="w-full glass-button py-2 rounded-xl font-medium flex items-center justify-center hover:scale-105 transition-transform duration-300">
                Read More
                <FaArrowRight className="ml-2 text-sm" />
              </button>
            </div>
          ))}
        </section>

        {/* Newsletter Signup */}
        <section className="glass-card p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Stay Updated
          </h2>
          <p className="text-lg  mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dog nutrition tips, health advice,
            and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="glass-input flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="glass-button px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
