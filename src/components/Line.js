const Line = ({ title = "", emoji = "" }) => {
  return (
    <>
      <div
        // rendre copiable le emoji au clique sur la div
        onClick={() => navigator.clipboard.writeText(emoji)}
        className="line"
      >
        <div className="title-emoji">
          <p>{title}</p>
          <p>{emoji}</p>
        </div>
        <div>
          <span className="click">Click to copy !</span>
        </div>
      </div>
    </>
  );
};

export default Line;
