export const Button = ({ 
  children, 
  onClick, 
  className = "", 
  size = "default",
  ...props 
}) => {
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center rounded-md font-medium 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        disabled:pointer-events-none disabled:opacity-50
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};