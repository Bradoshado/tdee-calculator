const TDEEResult = ({ tdee }) => {
  if (!tdee) return null;
  return (
    <div>
      <h2>Your TDEE is: {tdee.toFixed(2)} calories/day</h2>
    </div>
  );
};

export default TDEEResult;
