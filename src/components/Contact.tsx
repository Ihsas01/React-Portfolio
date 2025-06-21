import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('mXKWDY9ESIHAUk0XG');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'mohamedihsas001@gmail.com',
      };

      await emailjs.send(
        'service_nbhynxk', // Replace with your EmailJS service ID
        'template_lt8urts', // Replace with your EmailJS template ID
        templateParams,
        'mXKWDY9ESIHAUk0XG' // Replace with your EmailJS public key
      );
      
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again or contact me directly at mohamedihsas001@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-secondary" />,
      title: "Email",
      content: "mohamedihsas001@gmail.com",
      link: "mailto:mohamedihsas001@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl text-secondary" />,
      title: "Phone",
      content: "0763913526",
      link: "tel:+763913526"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-secondary" />,
      title: "Location",
      content: "Srilanka, Colombo",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary mb-4">Let's Collaborate</h2>
          <p className="text-tertiary text-lg">Get in touch with me for any questions or opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-primary-light/50 rounded-lg backdrop-blur-sm"
                >
                  {info.icon}
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-tertiary">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="bg-primary-light/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className={`text-lg ${focusedField === 'name' ? 'text-secondary' : 'text-tertiary'}`} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-tertiary/20 rounded-lg text-light placeholder-tertiary focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className={`text-lg ${focusedField === 'email' ? 'text-secondary' : 'text-tertiary'}`} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-tertiary/20 rounded-lg text-light placeholder-tertiary focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FaComment className={`text-lg ${focusedField === 'message' ? 'text-secondary' : 'text-tertiary'}`} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-tertiary/20 rounded-lg text-light placeholder-tertiary focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-secondary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-secondary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Your message has been sent successfully!
                </motion.p>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 