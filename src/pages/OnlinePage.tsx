import { useOnlineStatus } from "@/context/useOnlineStatus.js";
import React from "react";

const OnlinePage = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className="p-8 flex flex-col items-center gap-4 text-lime-500">
            <h1 className="text-2xl font-bold">Online Page</h1>

            <div className={`p-6 rounded-xl border text-center w-80 ${
                isOnline ? 'bg-emerald-900 border-emerald-500' : 'bg-rose-900 border-rose-500'
            }`}>
                <p className="text-xl font-bold mb-2">
                    {isOnline ? "🟢 Online" : "🔴 Offline"}
                </p>
                <p className="text-sm text-gray-200">
                    {isOnline ? "The connection is stable." : "The connection is unstable."}
                </p>
            </div>
        </div>
    );
};

export default OnlinePage;