import { useToggle } from "@/context/useToogle.js";
import React from "react";

const TogglePage = () => {
    const [isDarkMode, toggleDarkMode] = useToggle(true);

    return (
        <div className="p-8 flex flex-col items-center gap-6 text-lime-400">
            <h1 className="text-3xl font-bold">Toogle Page</h1>

            <div className={`p-6 rounded-xl border transition-colors w-96 flex flex-col items-center gap-4 ${isDarkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-200 text-black border-zinc-400'}`}>
                <p className="font-bold">Current mode: {isDarkMode ? "Dark" : "Light"}</p>
                <button 
                    onClick={toggleDarkMode}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer"
                >
                    Change mode
                </button>
            </div>
        </div>
    );
};

export default TogglePage;