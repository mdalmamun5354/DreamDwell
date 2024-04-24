const ExploreItem = ({ item }) => {
  return (
    <div className=" col-md-4 col-sm-6">
      <div className="single-explore-item">
        <div className="single-explore-img">
          <img src={item.img} alt="explore image" />
          <div className="single-explore-img-info">
            <button>{item.imgInfo}</button>
            <div className="single-explore-image-icon-box">
              <ul>
                <li>
                  <div className="single-explore-image-icon">
                    <i className="fa fa-arrows-alt"></i>
                  </div>
                </li>
                <li>
                  <div className="single-explore-image-icon">
                    <i className="fa fa-bookmark-o"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"single-explore-txt bg-theme-" + item.theme}>
          <h2><a href="#">{item.name}</a></h2>
          <p className="explore-rating-price">
            <span className="explore-rating">{item.rating}</span>
            <a href="#"> {item.ratingCount} ratings</a>
            <span className="explore-price-box">
              form
              <span className="explore-price">{item.price}</span>
            </span>
            <a href="#">{item.type}</a>
          </p>
          <div className="explore-person">
            <div className="row">
              <div className="col-sm-2">
                <div className="explore-person-img">
                  <a href="#">
                    <img src={item.person.img} alt="explore person" />
                  </a>
                </div>
              </div>
              <div className="col-sm-10">
                <p>{item.person.comment}</p>
              </div>
            </div>
          </div>
          <div className="explore-open-close-part">
            <div className="row">
              <div className="col-sm-5">
                <button className={"close-btn " + (item.isOpen && " open-btn")}>{item.isOpen ? "Open" : "Close"} now</button>
              </div>
              <div className="col-sm-7">
                <div className="explore-map-icon">
                  <a href="#"><i data-feather="map-pin"></i></a>
                  <a href="#"><i data-feather="upload"></i></a>
                  <a href="#"><i data-feather="heart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreItem;