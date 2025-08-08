import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  rating: number;
  text: string;
  author: {
    name: string;
    avatar: string;
  };
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  
    return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-orange-400' : 'text-gray-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ rating, text, author }:TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 h-fit">
      <StarRating rating={rating} />
      <p className="text-[#000000] text-sm md:text-md leading-relaxed mb-6">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#7D73C3] bg-gray-200 flex-shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-[#000000] text-sm md:text-md">{author.name}</span>
      </div>
    </div>
  );
};



const TestimonialsGrid = () => {
    // Data for Testimonials section
  const testimonials = [
    {
      rating: 4,
      text: "DoubleU AI has completely transformed how I manage daily tasks. From drafting emails to automating repetitive work, it feels like having a super-efficient teammate who never sleeps.",
      author: {
        name: "Princess, B",
        avatar: "/new-img/testimon-1.svg",
      }
    },
    {
      rating: 3,
      text: "Our sales agent from DoubleU helps us stay on top of leads and follow-ups. It's made our team faster and more focused.",
      author: {
        name: "David, U",
        avatar: "/new-img//testimon-2.svg",
      }
    },
    {
      rating: 5,
      text: "It's like having a quiet helper that doesn't interrupt.\nTasks get done faster, and I can breathe a bit more.",
      author: {
        name: "Mark, D",
        avatar: "/new-img//testimon-3.svg",
      }
    },
    {
      rating: 5,
      text: "We were looking for a simpler way to support our users at scale, with DoubleU AI, our assistant now handles customer questions smoothly, just like a real teammate would.",
      author: {
        name: "Zara, N",
        avatar: "/new-img//testimon-4.svg",
      }
    },
    {
      rating: 5,
      text: "The setup was easy, and I didn't need to overthink it.\nNow it helps me with my business and quick tasks while I focus on work that actually matters.",
      author: {
        name: "Ayo, Y",
        avatar: "/new-img//testimon-5.svg",
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 items-center">
        {/* Column 1 */}
        <div className="space-y-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        
        {/* Column 2 */}
        <div className="space-y-6">
          <TestimonialCard {...testimonials[2]} />
        </div>
        
        {/* Column 3 */}
        <div className="space-y-6">
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden space-y-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;