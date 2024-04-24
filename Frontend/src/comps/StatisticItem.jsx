const StatisticItem = ({ item }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-ststistics-box">
        <div className="statistics-content">
          <div className="counter">{item.countInK} </div> <span>K+</span>
        </div>
        <h3>{item.detail}</h3>
      </div>
    </div>
  )
}

export default StatisticItem;