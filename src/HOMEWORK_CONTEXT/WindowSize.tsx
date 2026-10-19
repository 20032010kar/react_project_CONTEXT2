import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface WindowSize {
    width: number;
    height: number;
}

interface WindowSizeContextType {
    windowSize: WindowSize;
}

export const WindowSizeContext = createContext<WindowSizeContextType | undefined>(undefined);

export function WindowSizeProvider({ children }: { children: ReactNode }) {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowSizeContext.Provider value={{ windowSize }}>
            {children}
        </WindowSizeContext.Provider>
    );
}

export function useWindowSize() {
    const context = useContext(WindowSizeContext);
    if (!context) {
        throw new Error("Please provide WindowSizeProvider for using useWindowSize");
    }
    return context;
}