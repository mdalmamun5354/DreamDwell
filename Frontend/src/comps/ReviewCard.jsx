const ReviewCard = ({ client }) => {

  const stars = [];
  for (let i = 0; i < client.starCount; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }

  return (
    <div className="single-testimonial-box">
      <div className="testimonial-description">
        <div className="testimonial-info">
          <div className="testimonial-img">
            <img src={client.img} alt="clients" />
          </div>
          <div className="testimonial-person">
            <h2>{client.name}</h2>
            <h4>{client.address}</h4>
            <div className="testimonial-person-star">
              {stars}
            </div>
          </div>
        </div>
        <div className="testimonial-comment">
          <p>{client.review}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;