function About() {
  return (
    <div>
      <div className="lg:flex items-center justify-center ">
        <div className="lg:basis-2/5">
          <img
            src="/images/custom_web.jpg"
            alt=""
            className="rounded-full w-64 h-64 m-auto object-cover"
          />
        </div>
        <div className="text-white mt-8 pl-6 lg:basis-2/5">
          <h3 className="text-gray-500 font-semibold pb-3">
            About Code Revolution
          </h3>
          <h3 className="font-semibold text-xl pb-6">
            We are a Leading-edge
            <br />
            <span className="text-sky-600">
              Web Development and Social Media
            </span>
            <br />
            Force, Driving Success
          </h3>
          <p className="text-gray-400">
            We use technology to empower and create positive change. We design
            user-friendly, innovative solutions with a commitment to ethics and
            responsibility. Our goal is to help businesses and individuals
            thrive in the digital age.
          </p>
          <button className="bg-sky-500 py-2 px-3 ml-2 mt-6 text-xl first:font-bold text-white lg:ml-2 lg:mb-16 mb-24">
            Learn more
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div>
            <img src="/images/web_dev.jpg" alt=""/>
        </div>
        <div className="text-gray-400 mx-6">
            <h2 className="font-semibold py-6 pl-4 text-xl">Custom Web Solutions? Count on us.</h2>
            <p className="pl-4 text-sm ">Code Revolution provides a full range of services to boost clients online presence and drive business growth. With custom web solutions, web development, SEO services, and social media integration and management, we help clients create engaging websites, improve search engine visibility, and connect with their audience. Our approach delivers cutting-edge strategies for long-term success.</p>
        </div>
      </div>

      {/* large screen */}
      <div className="hidden lg:flex bg-about mt-6 h-72 bg-cover bg-bottom relative">
      <div className="  bg-blackOverlay pt-2 py-2 absolute inset-y-0 right-0 w-5/12">
        <div className="text-gray-400 mx-6">
            <h2 className="font-semibold py-4 pl-4 text-xl">Custom Web Solutions? Count on us.</h2>
            <p className="pl-4 text-sm lg:leading-6 lg:text-base">Code Revolution provides a full range of services to boost clients online presence and drive business growth. With custom web solutions, web development, SEO services, and social media integration and management, we help clients create engaging websites, improve search engine visibility, and connect with their audience. Our approach delivers cutting-edge strategies for long-term success.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
