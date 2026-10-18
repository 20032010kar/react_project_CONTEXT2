import { useWindowSize } from "@/context/WindowSize.js";
import React from "react";

const WindowPage = () => {
    const { windowSize } = useWindowSize();

    return (
        <div className="p-8 text-yellow-300 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Window Page</h1>
            <div className="bg-purple-900/60 p-6 rounded-xl border border-purple-700 shadow-xl text-center">
                <p className="text-xl">Current width: <span className="text-cyan-400 font-bold">{windowSize.width}px</span></p>
                <p className="text-xl mt-2">Current height: <span className="text-purple-300 font-bold">{windowSize.height}px</span></p>
            </div>
        </div>
    );
};

export default WindowPage;