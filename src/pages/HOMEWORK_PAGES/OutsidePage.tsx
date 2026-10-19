import { useClickOutside } from "@/HOMEWORK_CONTEXT/useClickOutside.js";
import React, { useState, useRef } from "react";

const OutsidePage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement>(null);

    useClickOutside(menu, () => {
        setIsOpen(false);
    });

    return (
        <div className="p-8 flex flex-col items-center gap-4 text-slate-500">
            <h1 className="text-2xl font-bold">Page Outside</h1>

            <div className="relative" ref={menu}>
                <button 
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg shadow-sm font-medium cursor-pointer"
                >
                    {isOpen ? "Close ✖" : "Open ▼"}
                </button>

                {isOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg p-1.5 flex flex-col gap-1 z-20">
                        <button 
                            onClick={() => { alert("It is not possible to change the language yet."); setIsOpen(false); }}
                            className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm cursor-pointer"
                        >
                            Change the language
                        </button>
                        <button 
                            onClick={() => { alert("Settings pressed"); setIsOpen(false); }}
                            className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm cursor-pointer"
                        >
                            Settings
                        </button>
                    </div>
                )}
            </div>

            
        </div>
    );
};

export default OutsidePage;