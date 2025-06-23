import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCheck, FaTimes } from 'react-icons/fa';
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
          className="text-center mb-16"
        >
          <h2 className="heading gradient-text">Let's Work Together</h2>
          <p className="subheading max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-light mb-6">Get In Touch</h3>
              <p className="text-tertiary leading-relaxed mb-8">
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
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light group-hover:text-secondary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-tertiary">{info.content}</p>
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
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-light hover:text-secondary transition-all duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10 hover:shadow-glow ${social.color}`}
                    aria-label={social.title}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Available for new projects</span>
              </div>
              <p className="text-tertiary text-sm">
                I'm currently accepting new freelance opportunities and interesting project collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-light mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
                  className={`input-field pl-12 w-full ${formErrors.name ? 'border-error' : ''}`}
                />
                {formErrors.name && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 mt-1 text-error text-sm"
                  >
                    <FaTimes size={12} />
                    {formErrors.name}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
                  className={`input-field pl-12 w-full ${formErrors.email ? 'border-error' : ''}`}
                />
                {formErrors.email && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 mt-1 text-error text-sm"
                  >
                    <FaTimes size={12} />
                    {formErrors.email}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaComment className={`text-lg ${focusedField === 'subject' ? 'text-secondary' : 'text-tertiary'}`} />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Subject"
                  className={`input-field pl-12 w-full ${formErrors.subject ? 'border-error' : ''}`}
                />
                {formErrors.subject && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 mt-1 text-error text-sm"
                  >
                    <FaTimes size={12} />
                    {formErrors.subject}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <FaComment className={`text-lg ${focusedField === 'message' ? 'text-secondary' : 'text-tertiary'}`} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Message"
                  rows={6}
                  className={`input-field pl-12 w-full resize-none ${formErrors.message ? 'border-error' : ''}`}
                />
                {formErrors.message && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 mt-1 text-error text-sm"
                  >
                    <FaTimes size={12} />
                    {formErrors.message}
                  </motion.div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-success text-center p-3 bg-success/10 rounded-lg border border-success/20"
                  >
                    <FaCheck size={16} />
                    <span>Your message has been sent successfully!</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-error text-center p-3 bg-error/10 rounded-lg border border-error/20"
                  >
                    <FaTimes size={16} />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 