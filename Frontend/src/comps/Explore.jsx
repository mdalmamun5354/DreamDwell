import ExploreItem from "./ExploreItem";

import e1 from "../assets/images/explore/e1.jpg";
import e2 from "../assets/images/explore/e2.jpg";
import e3 from "../assets/images/explore/e3.jpg";
import e4 from "../assets/images/explore/e4.jpg";
import e5 from "../assets/images/explore/e5.jpg";
import e6 from "../assets/images/explore/e6.jpg";
import person from "../assets/images/explore/person.png";

const Explore = () => {
  const items = [
    {
      img: e1,
      imgInfo: "best rated",
      name: "tommy helfinger bar",
      rating: "5.0",
      ratingCount: 10,
      price: "5$-300$",
      type: "resturent",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: false,
      theme: 1,
    },
    {
      img: e2,
      imgInfo: "featured",
      name: "swim and dine resort",
      rating: "4.5",
      ratingCount: 8,
      price: "50$-500$",
      type: "hotel",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: true,
      theme: 2,
    },
    {
      img: e3,
      imgInfo: "best rated",
      name: "europe tour",
      rating: "5.0",
      ratingCount: 15,
      price: "5k$-10k$",
      type: "destination",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: false,
      theme: 3,
    },
    {
      img: e4,
      imgInfo: "most view",
      name: "banglow with swiming pool",
      rating: "5.0",
      ratingCount: 10,
      price: "10k$-15k$",
      type: "real estate",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: false,
      theme: 4,
    },
    {
      img: e5,
      imgInfo: "featured",
      name: "vintage car expo",
      rating: "4.2",
      ratingCount: 8,
      price: "500$-1200$",
      type: "automotion",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: true,
      theme: 5,
    },
    {
      img: e6,
      imgInfo: "best rated",
      name: "thailand tour",
      rating: "5.0",
      ratingCount: 15,
      price: "5k$-10k$",
      type: "destination",
      person: {
        img: person,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      },
      isOpen: false,
      theme: 1,
    },
  ];


  return (
    <section id="explore" className="explore">
      <div className="container">
        <div className="section-header">
          <h2>explore</h2>
          <p>Explore New place, food, culture around the world and many more</p>
        </div>
        <div class="explore-content">
          <div class="row">
            {items.map((i) => (
              <ExploreItem item={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore;