const Line = ({ title = "", emoji = "" }) => {
  return (
    <>
      <div className="line">
        <p>{title}</p>
        <p>{emoji}</p>
      </div>
    </>
  );
};

export default Line;
