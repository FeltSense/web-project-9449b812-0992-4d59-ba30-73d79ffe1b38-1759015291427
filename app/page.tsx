'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">PP</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Premier Properties Group</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Properties
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Market Insights
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Contact
          </a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
        <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          Home
        </a>
        <a href="#" className="text-gray-700 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          Properties
        </a>
        <a href="#" className="text-gray-700 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          Services
        </a>
        <a href="#" className="text-gray-700 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          About
        </a>
        <a href="#" className="text-gray-700 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          Market Insights
        </a>
        <a href="#" className="text-gray-700 block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-100 rounded-md">
          Contact
        </a>
        <a href="#" className="bg-blue-600 text-white block px-3 py-2 text-base font-medium hover:bg-blue-700 rounded-md mt-4">
          Get Quote
        </a>
      </div>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
  
  {/* Floating Property Cards */}
  <div className="absolute top-20 right-10 w-64 h-40 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 animate-float hidden lg:block">
    <div className="w-full h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg mb-3"></div>
    <div className="space-y-2">
      <div className="h-2 bg-white/30 rounded w-3/4"></div>
      <div className="h-2 bg-white/20 rounded w-1/2"></div>
    </div>
  </div>
  
  <div className="absolute bottom-32 left-10 w-56 h-36 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 animate-float-delayed hidden lg:block">
    <div className="w-full h-16 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-lg mb-3"></div>
    <div className="space-y-2">
      <div className="h-2 bg-white/30 rounded w-2/3"></div>
      <div className="h-2 bg-white/20 rounded w-1/3"></div>
    </div>
  </div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="max-w-4xl">
      {/* Premium Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-8">
        <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="text-yellow-400 text-sm font-medium">Award-Winning Real Estate Excellence</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        <span className="block">Unlock Your</span>
        <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Dream Property
        </span>
        <span className="block text-4xl md:text-5xl text-gray-300 font-medium mt-2">
          with Premier Properties Group
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
        From luxury estates to commercial investments, we leverage cutting-edge market analytics and personalized service to deliver exceptional real estate outcomes that exceed expectations.
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap gap-8 mb-10">
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400">$2.8B+</div>
          <div className="text-sm text-gray-400">Properties Sold</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-400">15K+</div>
          <div className="text-sm text-gray-400">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400">98%</div>
          <div className="text-sm text-gray-400">Success Rate</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
          <span className="flex items-center justify-center">
            Find Your Dream Home
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
        
        <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Schedule Consultation
          </span>
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <p className="text-sm text-gray-400 mb-4">Trusted by leading brands and institutions</p>
        <div className="flex items-center space-x-8 opacity-60">
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-24 bg-white/20 rounded"></div>
          <div className="h-8 w-16 bg-white/20 rounded"></div>
          <div className="h-8 w-28 bg-white/20 rounded"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Animated Gradient Orbs */}
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</section>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-1deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
    animation-delay: 2s;
  }
`}</style>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Premier Properties Group Marketing Services
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Leveraging cutting-edge technology and comprehensive market analysis to deliver 
        exceptional marketing solutions for your property investments
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Comprehensive Market Analysis
        </h3>
        <p className="text-gray-600">
          Premier Properties Group delivers data-driven market insights and competitive analysis 
          to optimize your property marketing campaigns and maximize ROI.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Extensive Property Database
        </h3>
        <p className="text-gray-600">
          Access Premier Properties Group's comprehensive database of properties and market 
          trends to create targeted marketing strategies that reach the right audience.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Cutting-Edge Technology
        </h3>
        <p className="text-gray-600">
          Premier Properties Group utilizes advanced marketing automation, AI-powered analytics, 
          and digital platforms to enhance campaign performance and client engagement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Expert Local Marketing Team
        </h3>
        <p className="text-gray-600">
          Our experienced local marketing professionals at Premier Properties Group provide 
          personalized service and proven track record in property marketing success.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        Partner with Premier Properties Group
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by marketing professionals across the industry
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Sarah Chen"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-sm text-gray-600">Marketing Director, TechFlow Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Premier Properties Group transformed our office space search completely. Their strategic approach to finding locations that align with our brand identity was exceptional. The team understood our marketing needs and delivered beyond expectations."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Marcus Rodriguez"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">VP of Marketing, Creative Dynamics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Working with Premier Properties Group was a game-changer for our agency expansion. They found us the perfect creative space that impresses clients and inspires our team. Their market knowledge and negotiation skills saved us significant costs."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Jennifer Walsh"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Jennifer Walsh</h4>
            <p className="text-sm text-gray-600">Chief Marketing Officer, BrandForward</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Premier Properties Group understood our unique requirements as a marketing consultancy. They secured us a prime location with excellent client accessibility and modern amenities. Their professional service and attention to detail were outstanding."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Premier Properties Group</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Your trusted partner in real estate marketing excellence. We deliver innovative solutions 
          that drive results and maximize property value.
        </p>
        <div className="space-y-2">
          <p className="text-gray-300">
            <span className="font-semibold">Phone:</span> (555) 123-4567
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Email:</span> info@premierpropertiesgroup.com
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Address:</span> 123 Business Plaza, Suite 400, City, ST 12345
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Property Marketing</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Advertising</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Brand Development</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 sm:mb-0">
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Premier Properties Group. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}