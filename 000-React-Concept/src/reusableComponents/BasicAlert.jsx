const BasicAlert = ({ msg, type }) => {
  return (
    <div className={`notification ${type}`}>
      <button className="delete"></button>
      {msg}
    </div>
  );
};

export default BasicAlert;
