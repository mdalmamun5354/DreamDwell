const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-menu">
          <div className="row">
            <div className="col-sm-3">
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html">Dream<span>Dwell</span></a>
              </div>
            </div>
            <div className="col-sm-9">
              <ul className="footer-menu-item">
                <li className="scroll"><a href="#works">how it works</a></li>
                <li className="scroll"><a href="#explore">explore</a></li>
                <li className="scroll"><a href="#reviews">review</a></li>
                <li className="scroll"><a href="#blog">blog</a></li>
                <li className="scroll"><a href="#contact">contact</a></li>
                <li className=" scroll"><a href="#contact">my account</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hm-footer-copyright">
          <div className="row">
            <div className="col-sm-5">
              <p>
                &copy;copyright. designed and developed by DreamDwell
              </p>
            </div>
            <div className="col-sm-7">
              <div className="footer-social">
                <span><i className="fa fa-phone"> +880 1796 031853</i></span>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title=""
            data-original-title="Back to Top" aria-hidden="true"></i>
        </div>

      </div>

    </footer>
  )
}

export default Footer;