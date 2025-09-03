import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Using react-hot-toast for success message
    import('react-hot-toast').then(({ toast }) => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    });
  };

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our dog food or need help choosing the right formula?
            We're here to help! Reach out to us anytime.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center">
                  <FaPhone className="text-2xl text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold ">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl text-green-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold ">Email</h3>
                    <p>support@premiumdogfood.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-2xl text-red-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold ">Address</h3>
                    <p>
                      123 Pet Nutrition Way<br />
                      Dog Food City, DF 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center">
                  <FaClock className="text-2xl text-purple-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold ">Business Hours</h3>
                    <div className="space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold mb-8 ">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 ">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glass-button py-4 rounded-xl font-semibold flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 ">
                How do I choose the right food for my dog?
              </h3>
              <p className="">
                Contact our nutrition experts! We'll help you choose based on your dog's age,
                breed, size, and any specific health needs.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 ">
                Do you offer free shipping?
              </h3>
              <p className="">
                Yes! We offer free shipping on orders over $50. Standard shipping is available
                for smaller orders with affordable rates.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 ">
                What's your return policy?
              </h3>
              <p className="">
                We offer a 30-day satisfaction guarantee. If your dog doesn't love our food,
                we'll refund your purchase or exchange it.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 ">
                Are your products vet recommended?
              </h3>
              <p className="">
                Absolutely! Our formulas are developed with input from veterinary nutritionists
                and are recommended by vets nationwide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
