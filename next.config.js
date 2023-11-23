/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // domains: ["neurosciencenews.com", "sugargeekshow.com", "www.foodandwine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neurosciencenews.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sugargeekshow.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.foodandwine.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};
