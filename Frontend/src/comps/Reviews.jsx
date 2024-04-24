import ReviewCard from "./ReviewCard";

import c1 from "../assets/images/clients/c1.png";
import c2 from "../assets/images/clients/c2.png";
import c3 from "../assets/images/clients/c3.png";
import c4 from "../assets/images/clients/c4.png";

const Reviews = () => {

  const clients = [
    {
      img: c1,
      name: "Tom Leakar",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c2,
      name: "monirul islam",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c3,
      name: "Shohrab Hossain",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c4,
      name: "Hardy Hemsowth",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c1,
      name: "Tom Leakar",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c2,
      name: "monirul islam",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c3,
      name: "Shohrab Hossain",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      img: c4,
      name: "Hardy Hemsowth",
      address: "london, UK",
      starCount: 5,
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
  ];
  let k = 0;

  return (
    <section id="reviews" className="reviews">
      <div className="section-header">
        <h2>clients reviews</h2>
        <p>What our client say about us</p>
      </div>
      <div className="reviews-content">
        <div className="testimonial-carousel">
          {clients.map((c) => (
            <ReviewCard key={k++} client={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews;