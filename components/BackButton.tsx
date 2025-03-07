const BackButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="fixed top-6 left-6 bg-white bg-opacity-50 text-black px-4 py-2 rounded-lg hover:bg-opacity-80 transition z-50"
      >
        ← Back
      </button>
    );
  };
  
  export default BackButton;
  