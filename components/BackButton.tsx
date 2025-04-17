const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-3 md:top-6 left-3 md:left-6 bg-white bg-opacity-50 text-black px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-opacity-80 transition z-50 text-sm md:text-base"
      aria-label="Go back to previous page"
    >
      ← Back
    </button>
  );
};

export default BackButton;
