const Topic = ({ topic }) => {
  return (
    <li>
      <div className="single-list-topics-content">
        <div className="single-list-topics-icon">
          <i className="flaticon-restaurant"></i>
        </div>
        <h2><a href="#">{topic.name}</a></h2>
        <p>{topic.listings} listings</p>
      </div>
    </li>
  )
}

export default Topic;