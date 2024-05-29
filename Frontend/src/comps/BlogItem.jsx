const BlogItem = ({ item }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="single-blog-item">
        <div className="single-blog-item-img">
          <img src={`uploads/blog/${item.img}`} alt="blog image" />
        </div>
        <div className="single-blog-item-txt">
          <h2><a href="#">{item.title}</a></h2>
          <h4>posted <span>by</span> <a href="#">{item.postedBy}</a> {item.date}</h4>
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  )
}


export default BlogItem;