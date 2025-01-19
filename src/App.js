import React, { useState } from 'react';
import Boltshift from './images/Boltshift.png';
import Lightbox from './images/lightbox.png';
import FeatherDev from './images/FeatherDev.jfif';
import Spherule from './images/Spherule.jfif';
import GlobalBank from './images/GlobalBank.jfif';
import Nietzsche from './images/Nietzsche.png';
import Sisyphus from './images/Sisyphus.jfif';
import logo from './images/logo.png';
import FAQSection from './FAQSection.js';
import BlogSection from './BlogSection.js';
import Section from './Section.js';
import Footer from './Footer.js'


const App = () => {
  
  const [selectedRole, setSelectedRole] = useState(null);

  return (
  
    <div className="bg-white min-h-screen">
      {/* Navbar */}
        <nav className="flex justify-between items-center py-4 px-8 shadow-md">
        <div className="text-2xl font-bold text-red-600">zysk</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-red-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-red-600">Products</a></li>
          <li><a href="#" className="text-gray-700 hover:text-red-600">Resources</a></li>
          <li><a href="#" className="text-gray-700 hover:text-red-600">Pricing</a></li>
        </ul>
        <img src={logo} alt="Profile" className="w-10 h-10 rounded-full" />
      </nav>

      
      {/* Hero Section */}
      <header className="text-center py-16 px-8">
        <div className="inline-block bg-red-100 text-red-600 text-sm px-4 py-2 rounded-full mb-4">
          New feature <span className="font-bold">Check out the team dashboard →</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Beautiful analytics to grow smarter</h1>
        <p className="text-gray-600 mb-8">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-100 text-gray-700 py-2 px-6 rounded-lg shadow hover:bg-gray-200">Demo</button>
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg shadow hover:bg-red-700">Sign up</button>
        </div>
      </header>
    

    <div className="container-xl lg:container m-auto w-1216px h-688px">
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">testmyskills</div>

        {/* Question */}
        <div>
          <h2 className="text-xl text-gray-400 mb-3">Hello, Conor</h2>
          <h3 className="text-2xl font-bold mb-10">Who are you?</h3>

          {/* Role Cards */}
          <div className="flex gap-4">
            <button
              className={`flex-1 p-4 border rounded-lg transition-all ${
                selectedRole === 'student' ? 'border-purple-500 bg-gray-800' : 'border-gray-600'
              }`}
              onClick={() => setSelectedRole('student')}
            >
              <div className="text-purple-400 mb-2">📚</div>
              <h4 className="font-bold">Student</h4>
              <p className="text-sm">Who is still studying</p>
            </button>
            <button
              className={`flex-1  p-4 border rounded-lg transition-all ${
                selectedRole === 'professional' ? 'border-purple-500 bg-gray-800' : 'border-gray-600'
              }`}
              onClick={() => setSelectedRole('professional')}
            >
              <div className="text-purple-400 mb-2">💼</div>
              <h4 className="font-bold">Professional</h4>
              <p className="text-sm">One who is working</p>
            </button>
          </div>
        </div>

        {/* Progress and Continue Button */}
        <div>
          <div className="h-1 bg-gray-700  rounded-full mb-4">
            <div className="h-full w-1/4 bg-purple-500 rounded-full"></div>
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg disabled:bg-gray-700"
            disabled={!selectedRole}
          >
            Continue
          </button>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 p-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/school.png')]"></div>

        {/* Chat Messages */}
        <div className="relative z-10">
          <div className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md inline-block">
              Welcome Conor! 🎉 It’s great to have you here.
            </div>
          </div>
          <div className="text-right">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md">I'm a student</button>
          </div>
          <div className="mb-4">
            <div className="bg-gray-300 p-4 rounded-lg shadow-md inline-block">...</div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="flex flex-col items-center py-16 bg-white">
      {/* Header Section */}
      <p className="text-gray-600 text-sm mb-4">Join 4,000+ companies already growing</p>

      {/* Logos Section */}
      <div className="flex gap-8 items-center">
        <img src={Boltshift} alt="Boltshift" className="h-8"/><p className="font-bold text-xl">Boltshift</p>
        <img src={Lightbox} alt="Lightbox" className="h-8"/><p className="font-bold text-xl">Lightbox</p>
        <img src={FeatherDev} alt="FeatherDev" className="h-8"/><p className="font-bold text-xl">Spherule</p>
        <img src={Spherule} alt="Spherule" className="h-8" /><p className="font-bold text-xl">Spherule</p>
        <img src={GlobalBank} alt="GlobalBank" className="h-8" /><p className="font-bold text-xl">GlobalBank</p>
        <img src={Nietzsche} alt="Nietzsche" className="h-8" /><p className="font-bold text-xl">Nietzsche</p>
      </div>

      {/* Divider Line */}
    </div>

    <div className="bg-white min-h-screen">
      {/* Features Section */}
      <section className="text-center py-16 px-8 bg-gray-50">
        <h2 className="text-sm font-bold text-red-600 uppercase mb-2">Features</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Analytics that feels like it’s from the future</h3>
        <p className="text-gray-600 mb-12">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 text-red-600 rounded-full p-4 inline-block mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    
    <div  className="w-full bg-gray-100 h-552 p-8 relative"><br />
      <div>
        
      <center><img src={Sisyphus} alt="Sisyphus" className="center h-9"/><p>Sisyphus</p></center><br />
      <br/>

        
        <div>
          <p className='font-bold text-2xl text-center'>We've been using Untitled to kick start every new<br />
                                                           Project and can't imagine working without it.</p><br />
        </div>
       
        <center><img src={logo} alt="Profile" className="w-10 h-10 rounded-full" /></center>
        <p className="font-bold text-center text-xl">Candice Wu</p>
        <p className="text-center">Product Manager Sisyphus</p><br/><br />
        
      </div>
    </div>
   
    </div>
    </div>
  );
};

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9m-9 0H3m9 0v-8m0-4a4 4 0 110-8 4 4 0 010 8z" />
      </svg>
    ),
    title: "Share team inboxes",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-1 4m0 0l-1-4m1 4h8a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2h4z" />
      </svg>
    ),
    title: "Deliver instant answers",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18m-9 0a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    ),
    title: "Manage your team with reports",
    description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-5-6h6m-6 0H6" />
      </svg>
    ),
    title: "Connect with customers",
    description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2 2m-2-2v6m6 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v4" />
      </svg>
    ),
    title: "Connect the tools you already use",
    description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 2.21 1.79 4 4 4s4-1.79 4-4M4 6c0 2.21 1.79 4 4 4s4-1.79 4-4" />
      </svg>
    ),
    title: "Our people make the difference",
    description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
  }
];
<>
<FAQSection/>
<BlogSection />
<Section />
<Footer/>
</>

export default App;


