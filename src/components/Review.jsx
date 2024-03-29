import React from 'react';

function Review({ title, author, review, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={`Cover of ${title}`} className="review-image" />
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{review}</p>
    </div>
  );
}

export default Review;