import StatisticItem from "./StatisticItem";

const Statistics = () => {

  const statistics = [
    {
      countInK: 90,
      detail: "listings",
    },
    {
      countInK: 40,
      detail: "listing categories",
    },
    {
      countInK: 65,
      detail: "visitors",
    },
    {
      countInK: 50,
      detail: "happy clients",
    },
  ];


  return (
    <section id="statistics" className="statistics">
      <div className="container">
        <div className="statistics-counter">
          {statistics.map((s) => (
            <StatisticItem key={s.countInK + s.detail} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics;