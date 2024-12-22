import { useEffect, useState } from "react";


export function Scroll(){


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in effect after the component mounts
        const timer = setTimeout(() => setIsVisible(true), 1000); // Slight delay for smoother effect
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    const handleScrollDown = () => {
        const nextSection = document.getElementById("maincontent");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(<>
        <div
            className={`absolute bottom-6 w-full transform -translate-x-1/2 cursor-pointer text-white animate-bounce transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleScrollDown}
            >
            <div className="text-center font-Poppins text-xl">Get Started</div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
            </svg>
        </div>
    </>)
}