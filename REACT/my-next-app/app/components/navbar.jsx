import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between w-full h-20">
            <div>
                <span className="text-lg">Statistics</span>
            </div>
            <div className="flex items-center">
                <div className="relative">
                    <input type="text" placeholder="Search something..." className="bg-gray-800 text-gray px-4 py-2rounded-full  border-none focus:outline-none" />
                    <span className="absolute right-3 top-2 text-gray-500">&#128269;</span>
                </div>
            </div>
            <div className="flex items-center">
                <button className="bg-yellow-500 text-grey-800 rounded-full px-4 py-2 mr-2">Upgrade</button>
                <div className="relative"></div>
                    <span>&#128276;</span>
                    <div className="absolute right-0 top-0 border-white border-2 rounded-full w-4 h-4">

                    </div>
            </div>
        </nav>
    );
};

export default Navbar;