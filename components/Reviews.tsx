
import React from 'react';

const Reviews: React.FC = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "Marketing Director",
      company: "Company Name",
      text: "Testimonial coming soon - Outstanding content strategy and execution that significantly improved our brand engagement.",
      rating: 5
    },
    {
      name: "Client Name",
      role: "CEO",
      company: "Startup Inc",
      text: "Testimonial coming soon - Professional, creative, and results-driven approach to social media management.",
      rating: 5
    }
  ];

  return (
    <section className="h-full p-[32px] md:p-[48px] overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-[24px] text-center leading-tight">Client Reviews</h2>
        <p className="text-gray-600 leading-relaxed mb-[48px] max-w-2xl mx-auto text-center content-safe">
          Kind words from clients who have experienced the impact of strategic content and social media management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-[32px] grid-consistent">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-medium p-[24px] border border-gray-100 hover-lift transition-smooth">
              <div className="flex mb-[16px] gap-[4px]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-[16px] italic content-safe">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 content-safe">More testimonials coming soon as I continue to deliver exceptional results for my clients.</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
