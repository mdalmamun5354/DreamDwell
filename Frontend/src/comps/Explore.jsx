import ExploreItem from "./ExploreItem";
import { useAppContext } from "../app";

const Explore = () => {
  const { hotels } = useAppContext();
  let counter = 0;

  return (
    <section id="explore" className="explore">
      <div className="container">
        <div className="section-header">
          <h2>explore</h2>
          <p>Explore New place, food, culture around the world and many more</p>
        </div>
        <div class="explore-content">
          <div class="row">
            {hotels.map((i) => (
              <ExploreItem item={i} theme={counter++ % 5 + 1}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore;