// components/ui/Button.js
export default function Button({ children, variant = "primary", className = "" }) {
    const baseStyles = "px-4 py-2 rounded font-semibold transition duration-300";
    const variantStyles =
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : variant === "outline"
        ? "border border-white text-white hover:bg-white hover:text-[#1e2237]"
        : "";
  
    return (
      <button className={`${baseStyles} ${variantStyles} ${className}`}>
        {children}
      </button>
    );
  }
  