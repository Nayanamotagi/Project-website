import React from "react";
import Testimorial1 from "./images/testimonial-1.jpg";
import Testimorial2 from "./images/testimonial-2.jpg";
import Testimorial3 from "./images/testimonial-3.jpg"

const FAQSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-12">
      {/* FAQ Heading */}
      <div className="text-center max-w-3xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium text-gray-800">
                Is there a free trial available?
              </h3>
              <span className="text-gray-500 group-open:rotate-180 transition-transform">
                &#x25BC;
              </span>
            </summary>
            <p className="mt-4 text-gray-600">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </details>
        </div>
        {[
          "Can I change my plan later?",
          "What is your cancellation policy?",
          "Can other info be added to an invoice?",
          "How does billing work?",
          "How do I change my account email?",
        ].map((question, index) => (
          <div
            key={index}
            className="p-6 border-t border-gray-200 cursor-pointer hover:bg-gray-50"
          >
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gray-800">{question}</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform">
                  &#x25BC;
                </span>
              </summary>
            </details>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <img
            src={Testimorial1} // Replace with your image path
            alt="Team"
            className="w-16 h-16 rounded-full object-cover mx-2"
          />
          <img
            src={Testimorial2}// Replace with your image path
            alt="Team"
            className="w-16 h-16 rounded-full object-cover mx-2"
          />
          <img
            src={Testimorial3} // Replace with your image path
            alt="Team"
            className="w-16 h-16 rounded-full object-cover mx-2"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
