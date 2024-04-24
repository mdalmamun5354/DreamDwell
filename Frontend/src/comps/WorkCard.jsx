const WorkCard = ({ work }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="single-how-works">
        <div className="single-how-works-icon">
          {work.icon}
        </div>
        {work.h2}
        {work.p}
        <button className="welcome-hero-btn how-work-btn">
          read more
        </button>
      </div>
    </div>
  )
}

export default WorkCard;