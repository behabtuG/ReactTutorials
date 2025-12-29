const BasicCard = ({ image, alt, Children }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={alt} />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="content">{Children}</div>
      </div>
    </div>
  );
};

export default BasicCard;
