import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-6 text-center mt-10">
      <p className="text-lg font-semibold">
        © {new Date().getFullYear()} ShopEase. Made with 💜 using React + TailwindCSS.
      </p>
    </footer>
  );
};

export default Footer;
