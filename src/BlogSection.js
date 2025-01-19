import React from 'react';
import product from "./images/Product.jfif";
import Design from "./images/Design.jfif";
import software from "./images/software.jfif";
import testimonial1 from "./images/testimonial-1.jpg";
import testimonial2 from "./images/testimonial-2.jpg";
import testimonial3 from "./images/testimonial-3.jpg";

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <br/>
        <br/>
        <p className='text-red-600 font-bold'>Our blog</p>
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide text-5xl">Lastest blog posts</h2><br/>
        <p className="mt-1 text-xl leading-8tracking-tight text-gray-900">Tool and strategies modern teams need to help their companies grow</p>
      </div>

      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {/* Blog Post 1 */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={Design} alt="Blog post 1" />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">Design</p>
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">UX review presentations</h3>
              <p className="mt-3 text-base text-gray-500">Learn how to improve your product's user experience with our in-depth review.</p>
            </div>
            <div className="mt-6 flex items-center">
            <img src={testimonial3} alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="flex-shrink-0">
                <span className="sr-only">Author</span>
                <p className="text-sm font-bold text-gray-900">Olivia Rhye</p>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">20 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={product} alt="Blog post 2" />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">Product</p>
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Migrating to Linear 101</h3>
              <p className="mt-3 text-base text-gray-500">A beginner's guide to migrating your team to Linear for project management.</p>
            </div>
            <div className="mt-6 flex items-center">
            <img src={testimonial2} alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="flex-shrink-0">
                <span className="sr-only">Author</span>
                <p className="text-sm font-bold text-gray-900">Phoenix Baker</p>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">19 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={software} alt="Blog post 3" />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">Software Engineering</p>
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Building your API stack</h3>
              <p className="mt-3 text-base text-gray-500">Best practices and tools for building a modern API stack.</p>
            </div>
            <div className="mt-6 flex items-center">
            <img src={testimonial1} alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="flex-shrink-0">
                <span className="sr-only">Author</span>
                <p className="text-sm font-bold text-gray-900">Lana Stenier</p>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">18 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br/>
      </div>
    </div>
  );
}

export default BlogSection;
