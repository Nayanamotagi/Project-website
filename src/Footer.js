import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h5 className="font-bold mb-2">Product</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Overview</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Solutions <span className="text-green-500">New</span></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Releases</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Media kit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Resources</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Newsletter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Use cases</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Startups</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Enterprise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Government</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">SaaS center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Marketplaces</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Ecommerce</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Social</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">GitHub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Dribbble</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Legal</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Cookies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Licenses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Settings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
         <br/>
         <div className="text-2xl font-bold text-red-600">zysk</div>
          <p className="text-gray-500-right">&copy; 2017 zysktechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
