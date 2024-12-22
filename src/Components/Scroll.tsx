

export function Scroll(){

    const handleScrollDown = () => {
        const nextSection = document.getElementById("maincontent");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(<>
        <div
            className="absolute bottom-6 w-full transform -translate-x-1/2 cursor-pointer text-white animate-bounce"
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