import React from 'react';

export default function AboutHistory() {
  return (
    <div className="flex justify-center w-full bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 p-2 lg:p-0">
      <div className="container flex flex-col lg:flex-row items-center justify-center p-4 lg:p-2 gap-6 py-12">
        {/* Text Section */}
        <div className="lg:w-1/2 ">
          <h2 className="text-2xl lg:text-4xl  font-bold text-white mb-4">Our Story</h2>
          <p className="text-white mb-4 text-lg">
            Founded in 2020, All Store began with a simple mission: to provide quality products at fair prices while delivering exceptional customer service.
          </p>
          <p className="text-white mb-4 text-lg">
            Over the years, we've grown from a small local shop to a trusted online destination for shoppers worldwide. Our commitment to quality, innovation, and customer satisfaction remains at the heart of everything we do.
          </p>
          <p className="text-white text-lg">
            Today, we continue to expand our product range and improve our services, always staying true to our core values and the trust our customers place in us.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center py-8">
          <img
            src="/images/store-about.jpg"
            alt="Store About Us"
            className="h-96 w-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
