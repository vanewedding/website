import { useEffect } from "react";
import logo from "../../assets/svg/logo_nocircle_white.svg";

export default function Loader({ isLoading }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const preventScroll = (e) => e.preventDefault();
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);
  console.log("isLoading in loader", isLoading);

  const strokeWidth = 4;
  const r = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-pink">
      <div
        className={`absolute transform transition-all duration-1000 ${
          isLoading ? " " : "-translate-y-full opacity-0"
        }`}
      >
        <svg className="w-50 h-50 absolute " viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#ffffff"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            transform="rotate(-90 50 50)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values={`${circumference * 2};0`}
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <img className="w-50 h-50 z-10" src={logo} alt="Logo" />
      </div>
    </div>
  );
}
