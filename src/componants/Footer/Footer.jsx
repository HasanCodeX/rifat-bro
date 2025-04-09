import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer footer-horizontal footer-center p-10">
        <aside>
          <div>
            <h3 className="text-2xl font-bold">
              Action<span className="text-yellow-300">Gallery</span>
            </h3>
          </div>
          <div className="flex gap-8 mt-2">
            <h3 className="text-xl">Bid.</h3>
            <h3 className="text-xl">Win.</h3>
            <h3 className="text-xl">Own.</h3>
          </div>
          <nav>
            <ul className="flex gap-12 mt-2 text-[18px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Auctions</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">How to works</a>
              </li>
            </ul>
          </nav>
        </aside>
        <p className="-mt-4 text-[18px]">
          {" "}
          © {new Date().getFullYear()} ActionHub - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
