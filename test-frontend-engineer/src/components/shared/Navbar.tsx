import React from "react";

const Navbar: React.FC = () => {
  return (
    <section className=" h-10 bg-[#131921]">
      <div className="container mx-auto flex items-center gap-2">
        <button className="bg-slate-900 w-32 flex items-center justify-center rounded-md  py-1.5 text-center text-lg font-medium text-white focus:outline-none   hover:bg-gray-700">
          Shop
        </button>
        <button className="bg-slate-900 w-32 flex items-center justify-center rounded-md  py-1.5 text-center text-lg font-medium text-white focus:outline-none   hover:bg-gray-700">
          Orders Review
        </button>
      </div>
    </section>
  );
};

export default Navbar;
