function Review() {
    return (
        <div className="text-white mt-8 pb-10">
            <h3 className="text-gray-400 ml-6 font-bold lg:text-center">Our Reviews</h3>
            <h3 className="ml-6 font-bold text-lg pt-2 lg:text-center"><span className="text-sky-500">Reviews</span> from our happy Customers</h3>
            <hr className="mx-6 my-4"/>

            <div className="lg:flex items-center justify-around gap-6 mx-16">
                <div className="text-center mx-6">
                    <p>"Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability and functionality. A definite asset for any online project."</p>

                    <p className="mt-4 mb-2">-Precious Okeke (<span className="text-yellow-500">CEO Fashion Apex</span>)</p>
                </div>

                <div className="hidden lg:flex">
                    <div className="text-center">
                    <p>"Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability and functionality. A definite asset for any online project."</p>

                    <p>-Kinglesy Anajemba (<span className="text-yellow-500">CEO Realest Digital</span>)</p>
                    </div>
                </div>
            </div>
            <hr className="mx-6"/>
        </div>
    )
}

export default Review
