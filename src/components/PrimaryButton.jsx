const PrimaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-yellow-400 text-black font-bold rounded-lg px-6 py-2 hover:bg-yellow-500 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

