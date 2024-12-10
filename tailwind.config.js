/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/hero1.jpg')",
        "blackOverlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)",
          "container1": "url('/public/images/personalized_solution.jpg')",
          "container2": "url('/public/images/customer_assistance.jpg')",
          "container3": "url('/public/images/security2.jpg')",

          // about picture
          "about": "url('/public/images/web_dev.jpg')",
      },
      // backgroundSize: {
      //   auto: "auto",
      //   cover: "cover",
      //   contain: "contain",
      //   "50%": "50%",
      //   16: "4rem",
      // },
    },
  },
  plugins: [],
};
