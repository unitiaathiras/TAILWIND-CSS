import React from "react";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <aside className="bg-black text-white p-4 w-2/12 flex flex-col items-center">
            <div className="flex items-center mb-10">
                <Image src="/images/logo.png" alt="Logo" width={36} height={32} className="mr-2" />
                <span className="text-lg ">Wise</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center">
                    <Image src="/images/admin.jpg" alt="Admin" width={50} height={80} />  
                </div>
                <span className="ml-2 mb-2">Louice Carter</span>
            </div>
            <button className="bg-transparent border border-gray-500 rounded-full px-4 py-1 text-white hower:bg-gray-500 transition">
                Edit
            </button>
            <nav className="mt-5">
                <div className="hover:bg-gray-700 transition mb-1 p-2 rounded">
                    <div className="flex items-center mb-5">
                        <Image src="/images/logo.png" alt="Logo" width={36} height={32} className="mr-2" />
                        <span>Dashboard</span>
                    </div>
                </div>
                <div className="hover:bg-gray-700 transition mb-1 p-2 rounded">
                    <div className="flex items-center mb-5">
                        <Image src="/images/logo.png" alt="Logo" width={36} height={32} className="mr-2" />
                        <span>Activity</span>
                    </div>
                </div>
                <div className="hover:bg-gray-700 transition mb-1 p-2 rounded">
                    <div className="flex items-center mb-5">
                        <Image src="/images/logo.png" alt="Logo" width={36} height={32} className="mr-2" />
                        <span>Shedule</span>
                    </div>
                </div>
                <div className="hover:bg-gray-700 transition mb-16 p-2 rounded">
                    <div className="flex items-center mb-5">
                        <Image src="/images/logo.png" alt="Logo" width={36} height={32} className="mr-2" />
                        <span>Settings</span>
                    </div>
                </div>
            </nav>
            <br />
            <br />
          
            <div className="flex items-center justify-between">
                <span className="text-white">Light</span>
                <div className="bg-gray-700 rounded-full p-2 flex items-center justify-between mt-5">
                    <div className="flex">
                        <span className="text-white-400">&#9728;</span>
                        {/* <span className="text-white">Light</span> */}
                    </div>
                    <div className="bg-yellow-100 rounded-full w-6 h-6"></div>
                        <div className="flex">
                        {/* <span>Dark</span> */}
                        
                        </div>
                </div>
                <span className="text-white">Dark</span>
            </div>
        </aside>
    );
};

export default Sidebar;