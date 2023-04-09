import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="container mx-auto py-3  rounded-xl ">
      <nav>
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          <div>
            <h1 className="text-3xl font-bold">Dream JOB</h1>
          </div>
          <div className="flex gap-14 justify-center">
            <Link>
              <span className="text-indigo-500 font-semibold hover:bg-slate-200 px-3 py-3 rounded-2xl">
                Statistics
              </span>
            </Link>
            <Link>
              <span className="font-semibold hover:bg-slate-200 px-3 py-3 rounded-2xl">
                Applied Jobs
              </span>
            </Link>
            <Link>
              <span className="font-semibold hover:bg-slate-200 px-3 py-3 rounded-2xl">
                Blog
              </span>
            </Link>
          </div>
          <div>
            <Link>
              <button className="border py-3 px-3 rounded-2xl bg-indigo-500 text-white font-semibold hover:bg-blue-700">
                Start Applying
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Header;