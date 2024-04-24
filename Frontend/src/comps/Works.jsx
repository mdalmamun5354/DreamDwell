import WorkCard from "./WorkCard";

const Works = () => {

  const works = [
    {
      icon: <i className="flaticon-lightbulb-idea"></i>,
      h2: <h2><a href="#">choose <span> what to</span> do</a></h2>,
      p: <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>,
    },
    {
      icon: <i className="flaticon-networking"></i>,
      h2: <h2><a href="#">find <span> what you want</span></a></h2>,
      p: <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>,
    },
    {
      icon: <i className="flaticon-location-on-road"></i>,
      h2: <h2><a href="#">explore <span> amazing</span> place</a></h2>,
      p: <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>,
    },
  ];

  return (
    <section id="works" className="works">
      <div className="container">
        <div className="section-header">
          <h2>how it works</h2>
          <p>Learn More about how our website works</p>
        </div>
        <div className="works-content">
          <div className="row">
            {
              works.map((w) => (
                <WorkCard
                  work={w}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;