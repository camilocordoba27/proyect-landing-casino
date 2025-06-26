export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};