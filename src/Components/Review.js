import React from "react"
import { useState } from "react"

const reviews = [
    {id: 1, text:"Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability and functionality. A definite asset for any online project.", author: "Precious Okeke", title:"CEO Fashion Apex"},
    {id: 2, text:"Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability and functionality. A definite asset for any online project.", author: "Kinglesy Anajemba", title:"CEO Realest Digital"}
]
function Review() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
        );
      };

       // Get the two reviews to display
  const firstReview = reviews[currentIndex];
  const secondReview =
    reviews[(currentIndex + 1) % reviews.length]; // Wrap around for the second review
    
    return (
        <div className="text-white mt-8 pb-10 relative">
            <h3 className="text-gray-400 ml-6 font-bold lg:text-center">Our Reviews</h3>
            <h3 className="ml-6 font-bold text-lg pt-2 lg:text-center"><span className="text-sky-500">Reviews</span> from our happy Customers</h3>
            <hr className="mx-6 my-4"/>
            <button className="cursor-pointer" onClick={handlePrev} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-72 md:top-40 left-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </button>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-16">
                <div className="text-center mx-6 ">
                    <p>{firstReview.text}</p>

                    <p className="mt-4 mb-2">-{firstReview.author} (<span className="text-yellow-500">{firstReview.title}</span>)</p>
                </div>

                 {/* Second Review */}
        <div className=" hidden lg:grid text-center mx-4 md:mx-6 ">
          <p>{secondReview.text}
            </p>
          <p className="text-sm text-gray-500">- {secondReview.author}
            (<span className="text-yellow-500">{firstReview.title}</span>)
        </p>
      </div>

            </div>
            <button className="cursor-pointer" onClick={handleNext} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute end-12 bottom-32 md:bottom-36">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </button>

            <hr className="mx-6"/>
        </div>
    )
}

export default Review
