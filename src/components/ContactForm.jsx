import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you would send the data to your backend
      // await axios.post('/api/contact', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Polytechnic University of the Philippines<br />
                      Sta. Mesa, Manila, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 rounded-full p-3 mr-4 flex-shrink-0">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+63 (2) 5335-1PUP (5335-1787)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">csc@pup.edu.ph</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <h4 className="text-xl font-semibold text-grey mb-2">
                Office Hours
              </h4>
              <p className="text-grey/90">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 8:00 AM - 12:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

