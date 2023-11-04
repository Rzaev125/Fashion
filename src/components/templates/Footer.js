function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <h2>FASHION</h2>
        <p>
          Complete your style with awesome
          <br /> clothes from us.
        </p>
        <div className="icons">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </div>
      </div>
      <div className="footerTop links">
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">Support</a>
          <a href="#">Careers</a>
        </div>

        <div>
          <h4>Quick Link</h4>
          <a href="#">Share Location</a>
          <a href="#">Orders Tracking</a>
          <a href="#">Size Guide</a>
          <a href="#">FAQs</a>
        </div>

        <div>
          <h4>Legal</h4>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
