const WelcomeHero = () => {
  return (
    <section id="home" className="welcome-hero" style={{
      background: `url("assets/images/banner.jpg")`, // Set the background image
      backgroundRepeat: 'no-repeat', // Optional: Set background repeat
      backgroundSize: 'cover', // Optional: Set background size
      // You can add more background properties here
    }}>
      <div className="container">
        <div className="welcome-hero-txt">
          <h2>best place to find and explore <br /> that all you need </h2>
          <p>
            Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
          </p>
        </div>
        <div className="welcome-hero-serch-box">
          <div className="welcome-hero-form">
            <div className="single-welcome-hero-form">
              <h3>what?</h3>
              <form action="index.html">
                <input type="text" placeholder="Ex: palce, resturent, food, automobile" />
              </form>
              <div className="welcome-hero-form-icon">
                <i className="flaticon-list-with-dots"></i>
              </div>
            </div>
            <div className="single-welcome-hero-form">
              <h3>location</h3>
              <form action="index.html">
                <input type="text" placeholder="Ex: london, newyork, rome" />
              </form>
              <div className="welcome-hero-form-icon">
                <i className="flaticon-gps-fixed-indicator"></i>
              </div>
            </div>
          </div>
          <div className="welcome-hero-serch">
            <button className="welcome-hero-btn" onclick={() => { }}>
              search <i data-feather="search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeHero;