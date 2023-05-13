import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, 200) + "..."}
          <button
            type="button"
            onClick={() => setReadMore(!readMore)}
            className="info-btn"
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button
          type="button"
          onClick={() => removeTour(id)}
          className="delete-btn btn-block btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
