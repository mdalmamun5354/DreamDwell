import BlogItem from "./BlogItem";

const Blogs = () => {

  const blogs = [
    {
      img: "b1.jpg",
      title: "How to find your Desired Place more quickly",
      postedBy: "admin",
      date: "march 2018",
      content: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
    },
    {
      img: "b2.jpg",
      title: "How to find your Desired Place more quickly",
      postedBy: "admin",
      date: "jun 2018",
      content: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
    },
    {
      img: "b3.jpg",
      title: "How to find your Desired Place more quickly",
      postedBy: "Client",
      date: "march 2018",
      content: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>news and articles</h2>
          <p>Always upto date with our latest News and Articles </p>
        </div>
        <div className="blog-content">
          <div className="row">
            {blogs.map((b) => (
              <BlogItem key={b.title + b.postedBy + b.date} item={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs;