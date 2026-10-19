import { usePrevious } from "@/HOMEWORK_CONTEXT/usePrevious.js";
import React, { useState } from "react";

const PreviousPage = () => {
    const [count, setCount] = useState<number>(0);
    
    const previousCount = usePrevious(count);

    return (
        <div className="p-10 flex flex-col items-center justify-center min-h-[70vh] text-black gap-6">
            <h1 className="text-3xl font-bold">Previous Page</h1>

            <div className="bg-purple-950/60 p-8 rounded-2xl border border-purple-700 shadow-2xl flex flex-col items-center gap-4 w-96 text-center">
                <div className="text-xl flex flex-col gap-2">
                    <p>Current value: <span className="text-cyan-400 font-bold text-2xl">{count}</span></p>
                    <p>Previous value: <span className="text-purple-300 font-bold text-2xl">{previousCount ?? "nothing"}</span></p>
                </div>

                <button 
                    onClick={() => setCount(count + 1)}
                    className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors shadow-lg"
                >
                    Increase the number
                </button>
            </div>
        </div>
    );
};

export default PreviousPage;