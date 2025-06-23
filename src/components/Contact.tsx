import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCheck, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('mXKWDY9ESIHAUk0XG');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mohamedihsas001@gmail.com',
      };

      await emailjs.send(
        'service_nbhynxk',
        'template_lt8urts',
        templateParams,
        'mXKWDY9ESIHAUk0XG'
      );
      
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again or contact me directly at mohamedihsas001@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "mohamedihsas001@gmail.com",
      link: "mailto:mohamedihsas001@gmail.com",
      color: "text-red-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+94 76 391 3526",
      link: "tel:+94763913526",
      color: "text-green-400"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Colombo, Sri Lanka",
      link: "https://maps.google.com",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      title: "GitHub",
      link: "https://github.com/Ihsas01",
      color: "hover:text-gray-400"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mohamed-ihsas-2a928a2b7",
      color: "hover:text-blue-400"
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading gradient-text">Let's Work Together</h2>
          <p className="subheading max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-light mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-tertiary leading-relaxed mb-6 sm:mb-8">
                Ready to start your next project? I'd love to hear from you. 
                Whether you have a question, want to discuss a project, or just want to say hello, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4 p-4 group hover:border-secondary/30 transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 ${info.color}`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light group-hover:text-secondary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-tertiary text-sm sm:text-base">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-light mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-light hover:text-secondary transition-all duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10 hover:shadow-glow ${social.color}`}
                    aria-label={social.title}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-light mb-6">Send Message</h3>
              
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-success text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-light mb-2">Message Sent!</h4>
                    <p className="text-tertiary mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSuccess(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pl-12 w-full ${
                            focusedField === 'name' ? 'border-secondary ring-2 ring-secondary/20' : ''
                          } ${formErrors.name ? 'border-error' : ''}`}
                          placeholder="Your name"
                        />
                      </div>
                      {formErrors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-error text-sm mt-1 flex items-center"
                        >
                          <FaTimes className="mr-1" />
                          {formErrors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pl-12 w-full ${
                            focusedField === 'email' ? 'border-secondary ring-2 ring-secondary/20' : ''
                          } ${formErrors.email ? 'border-error' : ''}`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {formErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-error text-sm mt-1 flex items-center"
                        >
                          <FaTimes className="mr-1" />
                          {formErrors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`input-field w-full ${
                          focusedField === 'subject' ? 'border-secondary ring-2 ring-secondary/20' : ''
                        } ${formErrors.subject ? 'border-error' : ''}`}
                        placeholder="What's this about?"
                      />
                      {formErrors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-error text-sm mt-1 flex items-center"
                        >
                          <FaTimes className="mr-1" />
                          {formErrors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <FaComment className="absolute left-4 top-4 text-tertiary" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          className={`input-field pl-12 w-full resize-none ${
                            focusedField === 'message' ? 'border-secondary ring-2 ring-secondary/20' : ''
                          } ${formErrors.message ? 'border-error' : ''}`}
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      {formErrors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-error text-sm mt-1 flex items-center"
                        >
                          <FaTimes className="mr-1" />
                          {formErrors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-error/10 border border-error/30 rounded-lg p-4 text-error text-sm"
                      >
                        <div className="flex items-center">
                          <FaTimes className="mr-2" />
                          {error}
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                        loading ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 