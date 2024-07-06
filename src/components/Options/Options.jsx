const Options = ({ handleFeedback, totalFeedback }) => {
  const handleOption = (value) => {
    handleFeedback(value);
  };

  return (
    <div>
      <button onClick={() => handleOption("good")}>Good</button>
      <button onClick={() => handleOption("neutral")}>Neutral</button>
      <button onClick={() => handleOption("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => handleOption("reset")}>Reset</button>
      )}
    </div>
  );
};

export default Options;
