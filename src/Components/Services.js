function Services() {
    return (
        <div className="mt-24">
            <div className="ml-6">
            <h3 className="text-gray-400 font-bold mb-4 lg:text-center">What we can do for you</h3>
            <h3 className="text-white font-bold text-xl lg:text-center"><span className="text-sky-500">Services </span>We are Providing To Our Customers</h3>  
            </div>


            <div className="mt-10 lg:flex lg:mx-4">
                <div className="w-11/12 bg-gray-800 m-auto rounded-md p-6 mb-4 lg:w-64 lg:h-fit xl:h-80 xl:w-80">
                    <h3 className="pb-4 text-white font-bold text-xl">
                        Web Development
                    </h3>
                    <p className="pb-4 text-white">Building a great website means making it look awesome and work smoothly. Let us create a site that wows your visitors and shows off your brand perfectly. We are experts in making websites that are easy to use and look great on any device. Trust us to take your online presence to the next level.</p>
                    <hr/>
                </div>

                <div className="w-11/12 bg-gray-800 m-auto rounded-md p-6 mb-4 lg:w-64 lg:h-fit xl:h-80 xl:w-80">
                    <h3 className="pb-4 text-white font-bold text-xl">
                        Social Media Services
                    </h3>
                    <p className="pb-4 text-white">Boost your online presence with our comprehensive social media management and advertising services. From managing social media accounts on platforms like Facebook, Instagram, and Twitter to revamping your social handles, we ensure your brand stands out and thrives in the digital landscape.</p>
                    <hr/>
                </div>

                <div className="w-11/12 bg-gray-800 m-auto rounded-md p-6 mb-4 lg:w-56 lg:h-fit xl:h-80 xl:w-72">
                    <h3 className="pb-4 text-white font-bold text-xl">
                    SEO Services
                    </h3>
                    <p className="pb-4 text-white">Elevate your online visibility with our SEO services. We optimize your website to rank higher on search engines, driving organic traffic and boosting your online presence. Let us help your business reach new heights with our proven SEO strategies.</p>
                    <hr/>
                </div>

                <div className="w-11/12 bg-gray-800 m-auto rounded-md p-6 mb-4 lg:w-52 lg:h-fit xl:h-80 xl:w-72 ">
                    <h3 className="pb-4 text-white font-bold text-xl">
                    Graphics and Design
                    </h3>
                    <p className="pb-4 text-white">Illuminate your brand with our graphic design expertise. From eye-catching flyers and rate cards to captivating stickers and logos, we craft visual assets that leave a lasting impression. Let our designs bring your vision to life and elevate your brand identity.</p>
                    <hr/>
                </div>
                </div> 

                <div className="mt-12 mx-6 lg:hidden">
                <iframe width="609" height="150" src="https://www.youtube.com/embed/xZZDFbjNsbo" title="Coderevo - what we do" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="text-white py-6">
                    <p>For over 4 years, we've proudly served clients throughout Africa, delivering exceptional web design and development services. In addition to web design, we specialize in social media advertising, brand growth, page management, graphic design, and more. Contact us today to elevate your brand's digital presence and achieve your goals.</p>
                    <button className="p-4 bg-sky-400 mt-6">Get in touch</button>
                </div>
                    </div>  


                    {/* for large screen */}
                    <div className="hidden lg:flex lg:items-center lg:justify-center mx-6 gap-6 lg:my-8">
                        <div >
                    <iframe width="447" height="240" src="https://www.youtube.com/embed/xZZDFbjNsbo" title="Coderevo - what we do" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="basis-2/3"></iframe>
                    </div>

                    <div className="text-white p-6 lg:p-4 basis-1/2">
                    <p>For over 4 years, we've proudly served clients throughout Africa, delivering exceptional web design and development services. In addition to web design, we specialize in social media advertising, brand growth, page management, graphic design, and more. Contact us today to elevate your brand's digital presence and achieve your goals.</p>
                    <button className="p-4 bg-sky-400 mt-6">Get in touch</button>
                </div>
                    </div>  
                        </div>       
    )
}

export default Services
