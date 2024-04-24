import Topic from "./Topic";


const topics = [
  {
    name: "resturent",
    listings: 150,
  },
  {
    name: "destination",
    listings: 214,
  },
  {
    name: "hotels",
    listings: 185,
  },
  {
    name: "healthcaree",
    listings: 200,
  },
  {
    name: "automotion",
    listings: 120,
  },
];

const ListTopics = () => {
  return (
    <section id="list-topics" className="list-topics">
      <div className="container">
        <div className="list-topics-content">
          <ul>
            {topics.map((topic) => (
              <Topic key={topic.name + topic.listings} topic={topic} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ListTopics;